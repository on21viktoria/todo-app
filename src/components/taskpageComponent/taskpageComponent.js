import React, { useState } from "react";
import { TasklistComponent } from "./../tasklistComponent/tasklistComponent.js";
import { AddTaskComponent } from "../addTaskComponent/addTaskComponent.js";

// Verwaltet Kommunikation zwischen Eingabefeld für neue To Dos und der Tasklist, die die To Dos anzeigt.
export const TaskpageComponent = () => {
  const [todoList, setTodoList] = useState([]);

  function addTaskToList(newItem) {
    setTodoList((currentTodoList) => [...currentTodoList, newItem]);
  }

  return (
    <div>
      <AddTaskComponent functionToAddTask={addTaskToList} />
      <TasklistComponent toDos={todoList} />
    </div>
  );
};
