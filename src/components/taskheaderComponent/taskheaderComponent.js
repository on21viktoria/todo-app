import React, { useState } from "react";

// Zeigt den Namen des Tasks an sowie die Checkbox zum Durchstreichen des Tasks.
// Verwaltet Speichern von Änderungen und Durchstreichen eines Tasks.
export const TaskheaderComponent = ({
  isReadonly,
  task,
  updatingTask,
  setUpdatingTask,
}) => {
  const [todoDone, setTodoDone] = useState(false);

  function checkboxHandler() {
    const changed = !todoDone;
    setTodoDone(changed);
  }

  function changeHandler(event) {
    const newTempTodoObject = {
      id: updatingTask.id,
      taskName: event.target.value,
    };
    setUpdatingTask(newTempTodoObject);
  }

  return (
    <div className="card-header container">
      {isReadonly ? (
        <div className="row">
          <div className="col-8 d-flex align-items-start">
            {todoDone ? (
              <h5 className="task-component card-title" id="closed-task">
                {task.taskName}
              </h5>
            ) : (
              <h5 className="task-component card-title">{task.taskName}</h5>
            )}
          </div>
          <div className="col-4 d-flex align-items-center">
            <div className="input-group justify-content-end">
              <input
                className="form-check-input mt-0"
                type="checkbox"
                aria-label="Checkbox for following text input"
                onChange={checkboxHandler}
              />
            </div>
          </div>
        </div>
      ) : (
        <input
          className="form-control"
          id={task.id}
          type="text"
          value={updatingTask.taskName || ""}
          onChange={changeHandler}
        />
      )}
    </div>
  );
};
