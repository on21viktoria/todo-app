import React from "react";

export const TaskComponent = ({ task, readonlyProp }) => {
  return (
    <div>
      <input
        id={task.id}
        type="text"
        defaultValue={task.taskName}
        readOnly={readonlyProp}
      />
    </div>
  );
};
