import React from "react";

export const TaskComponent = ({ taskName }) => {
  return (
    <div>
      <p>{taskName}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};
