import React, { useState } from "react";
import { TaskComponent } from "../taskComponent/taskComponent";
import "./tasklistComponent.css";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";

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
    <div className="tasklistComponent_container">
      <ul>
        {toDos.map((toDo) => (
          <div className="tasklistComponent_to-do-item" key={toDo.id}>
            <TaskComponent readonlyProp={isReadonly} task={toDo} />
            <button
              className="tasklistComponent_button"
              onClick={() => editTask(toDo.id)}
            >
              {isReadonly ? <FaEdit></FaEdit> : <FaSave></FaSave>}
            </button>
            <button
              className="tasklistComponent_button"
              onClick={() => deleteTask(toDo.id)}
            >
              <FaTrash></FaTrash>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};
