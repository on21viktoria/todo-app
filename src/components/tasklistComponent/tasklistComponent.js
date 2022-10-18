import React from "react";
import { TaskComponent } from "../taskComponent/taskComponent";

export const TasklistComponent = ({ toDos }) => {
  return (
    <ul>
      {toDos.map((toDo) => (
        <li key={toDo}>
          <TaskComponent taskName={toDo} />
        </li>
      ))}
    </ul>
  );
};
