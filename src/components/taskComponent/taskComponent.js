import React, { useState } from "react";
import "./taskComponent.css";
import { TaskheaderComponent } from "../taskheaderComponent/taskheaderComponent";

export const TaskComponent = ({ task, deleteTask, functionToSaveChanges }) => {
  const [isReadonly, setReadonly] = useState(true);
  const [updatingTask, setUpdatingTask] = useState(task);

  function editTask(idToEdit) {
    if (isReadonly) {
      setReadonly(false);
    } 
  };

  function saveChanges() {
    setReadonly(true);
    functionToSaveChanges(updatingTask);
  };



  return (
    <div className="mb-3 row justify-content-around">
      <div className="card w-50 p-0 " key={task.id}>
        <TaskheaderComponent isReadonly={isReadonly} task={task}/>

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
