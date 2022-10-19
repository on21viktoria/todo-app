import React, { useState } from "react";
import "./taskComponent.css";

export const TaskComponent = ({ task, deleteTask, functionToSaveChanges }) => {
  const [isReadonly, setReadonly] = useState(true);
  const [updatingTask, setUpdatingTask] = useState(task);
  const [todoDone, setTodoDone] = useState(false);

  function editTask(idToEdit) {
    if (isReadonly) {
      setReadonly(false);
    } 
  };

  function changeHandler(event) {
    const newTempTodoObject = {
      id: updatingTask.id,
      taskName: event.target.value,
    }
    setUpdatingTask(newTempTodoObject)
  };

  function saveChanges() {
    setReadonly(true);
    functionToSaveChanges(updatingTask);
  };

  function checkboxHandler() {
    const changed = !todoDone;
    setTodoDone(changed);    
  };



  return (
    <div className="mb-3 row justify-content-around">
      <div className="card w-50 p-0 " key={task.id}>
        <div className="card-header container">
          {isReadonly ? (
            <div className="row">
              <div className="col-8 d-flex align-items-start">
                {todoDone ? (<h5 className="task-component card-title" id="closed-task">{task.taskName}</h5>) 
                : (<h5 className="task-component card-title" >{task.taskName}</h5>)}
              </div>
              <div className="col-4 d-flex align-items-center">
                <div className="input-group justify-content-end">
                    <input className="form-check-input mt-0" type="checkbox" aria-label="Checkbox for following text input" onChange={checkboxHandler}/>
                </div>
              </div>
            </div>
          ) : (
            <input
              className="form-control"
              id={task.id}
              type="text"
              value={updatingTask.taskName ||''}
              onChange={changeHandler}
            />
          )}
        </div>
        <div className="card-body">
          {isReadonly ? (<button
            className="btn btn-outline-secondary btn-sm m-2"
            onClick={() => editTask(task.id)}
          ><i className="bi bi-pencil-square"></i></button>) :
          (<button
            className="btn btn-outline-secondary btn-sm m-2"
            onClick={() => saveChanges()}
          ><i className="bi bi-file-earmark-bar-graph-fill"></i></button>)}
          <button
            className="btn btn-outline-secondary btn-sm m-2"
            onClick={() => deleteTask(task.id)}
          >
            <i className="bi bi-trash3-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
