// imports
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "./userContext";

// styles
import { useState } from "react";
import "./app.scss";

// components
import Form from "./Form/index";
import Tasks from "./Tasks/index";
import Buttons from "./Buttons/index";

const App = () => {
  /**
   * State
   */
  const [input, setInput] = useState("");
  const [cachedTasks, setCachedTasks] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      label: "Checker la todolist",
      done: true,
    },
    {
      id: uuidv4(),
      label: "Engager Mathieu",
      done: false,
    },
  ]);
  /**
   * Context
   */
  const userParameters = useContext(UserContext);
  const { colorPalette, theme, upperCase, setTheme, setUpperCase } =
    userParameters;
  /**
   * Handlers
   */
  const changeInputValue = (value) => {
    setInput(value);
  };

  const onSubmit = () => {
    // preventing empty tasks
    if (input.length !== 0) {
      setTasks([
        {
          id: uuidv4(),
          label: input,
          done: false,
        },
        ...tasks,
      ]);
      // clearing input
      setInput("");
    }
  };

  const sortTasks = () => {
    // putting tasks in cache
    setCachedTasks([...tasks]);
    // toggling sorted switch
    setSorted(!sorted);

    // if tasks aren't sorted
    if (!sorted) {
      // sort them
      setTasks([...tasks.sort((a, b) => (a.done > b.done ? 1 : -1))]);
    } else {
      // restore previous tasks order
      setTasks([...cachedTasks]);
    }
  };

  const handleTask = (id, prop) => {
    // providing new tasks list with updated task
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          [prop]: !task[prop],
        };
      }
      return task;
    });
    // changing theme
    updateBackgroundColor();
    setTasks(newTasks);
  };

  const taskDone = (id) => () => {
    handleTask(id, "done");
  };

  const updateBackgroundColor = () => {
    // randomly choosing a new theme color from the palette
    const newColor =
      colorPalette[Math.floor(Math.random() * colorPalette.length)];
    // preventing same color picking
    if (theme === newColor) {
      return updateBackgroundColor();
    }
    setTheme(newColor);
    // change body color
    document.body.className = theme;
  };

  const inputFocus = () => {
    const input = document.querySelector('#filled-basic');
    // highlighting form input
    input.focus();
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>TO-DO :</h1>
      </header>
      <main>
        <div className="app-content">
          <Buttons
            inputFocus={inputFocus}
            sortTasks={sortTasks}
          />
          <Form
            uppercase={upperCase}
            inputValue={input}
            onInputChange={changeInputValue}
            onSubmit={onSubmit}
          />
          <Tasks tasks={tasks} handleTaskDone={(id) => taskDone(id)} />
        </div>
      </main>
      <footer />
    </div>
  );
};

export default App;
