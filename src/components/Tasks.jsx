import React from "react";
import Task from "./Item";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task )=> (<Task task={task} />))}
    </div>
  );
};

export default Tasks;