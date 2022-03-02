import React from "react";

import "../style/Item.css"

const Task = ({ task }) => {
  return <div class="item-container">{task.title}</div>;
}

export default Task;