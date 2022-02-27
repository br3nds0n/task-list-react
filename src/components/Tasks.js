import React from "react";
import Task from "./Item";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => <Task />)}
    </div>
  );
};

export default Tasks;