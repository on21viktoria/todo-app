import React from "react";

export const TaskbodyComponent = ({isReadonly, deleteTask, task, setReadonly, functionToSaveChanges, updatingTask, setUpdatingTask}) => {

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
    )
}