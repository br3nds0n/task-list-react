import React, { useState } from "react";

import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

import "../style/App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'estudar programação',
      completed:false
    },
    {
      id: '2',
      title: 'Ler livros',
      completed:true
    }
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks, {
        title: taskTitle,
        id: Math.random(10),
        completed: false
      }
    ];

    setTasks(newTask);
  }

  return ( 
  <div>
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks}/>
    </div>
  </div>
  );
};

export default App;