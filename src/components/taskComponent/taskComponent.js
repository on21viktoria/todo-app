import React, { useState } from "react";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";
import "./taskComponent.css";

export const TaskComponent = ({ task, deleteTask }) => {
  const [isReadonly, setReadonly] = useState(true);

  function editTask(idToEdit) {
    if (isReadonly) {
      setReadonly(false);
    } else {
      setReadonly(true);
    }
  }

  return (
    <div className="taskComponent_to-do-item" key={task.id}>
      {isReadonly ? (
        <p class="taskComponent_task-text">{task.taskName}</p>
      ) : (
        <input
          class="taskComponent_task-input"
          id={task.id}
          type="text"
          defaultValue={task.taskName}
        />
      )}
      <button
        className="taskComponent_button"
        onClick={() => editTask(task.id)}
      >
        {isReadonly ? <FaEdit></FaEdit> : <FaSave></FaSave>}
      </button>
      <button
        className="taskComponent_button"
        onClick={() => deleteTask(task.id)}
      >
        <FaTrash></FaTrash>
      </button>
    </div>
  );
};
