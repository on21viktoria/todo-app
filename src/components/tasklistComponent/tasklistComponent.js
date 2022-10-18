import React, { useState } from "react";
import { TaskComponent } from "../taskComponent/taskComponent";

// Zeigt die vom Nutzer eingegebenen To Dos als Liste an.
export const TasklistComponent = ({ functionToDeleteTask, toDos }) => {
  const [isReadonly, setReadonly] = useState(true);

  function deleteTask(idToDelete) {
    functionToDeleteTask(idToDelete);
  }

  function editTask(idToEdit) {
    if (isReadonly) {
      setReadonly(false);
    } else {
      setReadonly(true);
    }
  }

  return (
    <ul>
      {toDos.map((toDo) => (
        <li key={toDo.id}>
          <TaskComponent readonlyProp={isReadonly} task={toDo} />
          <button onClick={() => editTask(toDo.id)}>
            {isReadonly ? "Bearbeiten" : "Speichern"}
          </button>
          <button onClick={() => deleteTask(toDo.id)}>Löschen</button>
        </li>
      ))}
    </ul>
  );
};
