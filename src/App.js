// imports
import { v4 as uuidv4 } from 'uuid';
import Button from '@material-ui/core/Button';

// styles
import { useState, useEffect } from 'react';
import './app.scss';
// components
import Form from './Form/index';
import Tasks from './Tasks/index';

const App = () => {
  const [input, setInput] = useState('');
  // initial tasks
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      label: 'Checker la todolist',
      done: true,
    },
    {
      id: uuidv4(),
      label: 'Engager Mathieu',
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
      setInput('');
    }
  };

  const sortTasks = () => {
    console.log('sort');
    const sortedTasks = tasks.sort((a, b) => ((a.done > b.done) ? 1 : -1));
    console.log(sortedTasks);
    setTasks(sortedTasks);
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

  const taskDone = id => () => {
    handleTask(id, 'done');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>TO-DO :</h1>
      </header>
      <main>
        <div className="app-container">
          <Button type="button" variant="contained" color="primary" onClick={sortTasks}>
            Sort
          </Button>
          <Form
            inputValue={input}
            onInputChange={changeInputValue}
            onSubmit={onSubmit}
          />
          <Tasks
            tasks={tasks}
            handleTaskDone={id => taskDone(id)}
          />
        </div>
      </main>
      <footer />
    </div>
  );
};

export default App;