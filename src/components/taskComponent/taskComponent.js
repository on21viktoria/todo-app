import React from "react";

export const TaskComponent = ({ taskName }) => {
  function editToDo() {}

  return (
    <div>
      <p>{taskName}</p>
      <button onClick={editToDo}>Edit</button>
      <button>Delete</button>
    </div>
  );
};
