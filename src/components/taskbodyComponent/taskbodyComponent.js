import React from "react";

// Verwaltet Buttons zum Bearbeiten, Änderungen Speichern und Löschen eines Tasks.
export const TaskbodyComponent = ({
  isReadonly,
  deleteTask,
  task,
  setReadonly,
  functionToSaveChanges,
  updatingTask,
}) => {
  function editTask() {
    if (isReadonly) {
      setReadonly(false);
    }
  }

  function saveChanges() {
    setReadonly(true);
    functionToSaveChanges(updatingTask);
  }

  return (
    <div className="card-body">
      {isReadonly ? (
        <button
          className="btn btn-outline-secondary btn-sm m-2"
          onClick={() => editTask(task.id)}
        >
          <i className="bi bi-pencil-square"></i>
        </button>
      ) : (
        <button
          className="btn btn-outline-secondary btn-sm m-2"
          onClick={() => saveChanges()}
        >
          <i className="bi bi-file-earmark-bar-graph-fill"></i>
        </button>
      )}
      <button
        className="btn btn-outline-secondary btn-sm m-2"
        onClick={() => deleteTask(task.id)}
      >
        <i className="bi bi-trash3-fill"></i>
      </button>
    </div>
  );
};
