import React, { useState } from "react";
import { TaskComponent } from "../taskComponent/taskComponent";
import "./tasklistComponent.css";

// Zeigt die vom Nutzer eingegebenen To Dos als Liste an.
export const TasklistComponent = ({ functionToDeleteTask, toDos }) => {
  function deleteTask(idToDelete) {
    functionToDeleteTask(idToDelete);
  }

  return (
    <div className="tasklistComponent_container">
      <ul>
        {toDos.map((toDo) => (
          <TaskComponent deleteTask={deleteTask} task={toDo} />
        ))}
      </ul>
    </div>
  );
};
