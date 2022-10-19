import React, { useState } from "react";
import "./taskComponent.css";
import { TaskheaderComponent } from "../taskheaderComponent/taskheaderComponent";
import { TaskbodyComponent } from "../taskbodyComponent/taskbodyComponent";

export const TaskComponent = ({ task, deleteTask, functionToSaveChanges }) => {
  const [isReadonly, setReadonly] = useState(true);
  const [updatingTask, setUpdatingTask] = useState(task); 

  function functionToSave() {
    functionToSaveChanges(updatingTask);
  }





  return (
    <div className="mb-3 row justify-content-around">
      <div className="card w-50 p-0 " key={task.id}>
        <TaskheaderComponent isReadonly={isReadonly} task={task} updatingTask={updatingTask} setUpdatingTask={setUpdatingTask}/>
        <TaskbodyComponent isReadonly={isReadonly} task={task} deleteTask={deleteTask} setReadonly={setReadonly} functionToSaveChanges={functionToSave} updatingTask={updatingTask} setUpdatingTask={setUpdatingTask}/>
      </div>
    </div>
  );
};
