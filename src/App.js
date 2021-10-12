// imports
import { v4 as uuidv4 } from "uuid";
import Button from "@material-ui/core/Button";

// styles
import { useState } from "react";
import "./app.scss";
// components
import Form from "./Form/index";
import Tasks from "./Tasks/index";

const App = () => {
  const [input, setInput] = useState("");
  const [cachedTasks, setCachedTasks] = useState([]);
  const [sorted, setSorted] = useState(false);
  // initial tasks
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
      setTasks([...cachedTasks])
    }
  };

  const handleTask = (id, prop) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          [prop]: !task[prop],
        };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const taskDone = (id) => () => {
    handleTask(id, "done");
  };

  return (
      <div className="app">
        <header className="app-header">
          <h1>TO-DO :</h1>
        </header>
        <main>
          <div className="app-content">
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={sortTasks}
            >
              Sort
            </Button>
            <Form
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
