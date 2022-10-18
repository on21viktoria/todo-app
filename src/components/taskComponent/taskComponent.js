import React from "react";

export const TaskComponent = ({ taskName, readonlyProp }) => {
  return (
    <div>
      <input type="text" defaultValue={taskName} readOnly={readonlyProp} />
    </div>
  );
};
