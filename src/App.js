// imports
import { v4 as uuidv4 } from 'uuid';

// styles
import { useState } from 'react';
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
      deleted: false,
    },
    {
      id: uuidv4(),
      label: 'Engager Mathieu',
      done: false,
      deleted: false,
    },
  ])
  const changeInputValue = (value) => {
    setInput(value);
  }

  const onSubmit = () => {
    // preventing empty tasks
    if (input.length !== 0) {
      setTasks([
        {
          id: uuidv4(),
          label: input,
        },
        ...tasks,
      ]);
      setInput('');
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>TO-DO :</h1>
      </header>
      <main>
        <div className="container">
          <Form
            inputValue={input}
            onInputChange={changeInputValue}
            onSubmit={onSubmit}
          />
          <Tasks
            tasks={tasks}
          />
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;