import React from "react";
import { TaskComponent } from "../taskComponent/taskComponent";

// Zeigt die vom Nutzer eingegebenen To Dos als Liste an.
export const TasklistComponent = ({ functionToDeleteTask, toDos }) => {
  function deleteTask(key) {
    functionToDeleteTask(key);
  }

  return (
    <ul>
      {toDos.map((toDo, i) => (
        <li key={toDo + i}>
          <TaskComponent taskName={toDo} />
          <button>Edit</button>
          <button onClick={deleteTask(toDo)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
