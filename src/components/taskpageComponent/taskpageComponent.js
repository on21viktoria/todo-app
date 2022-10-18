import React, { useState } from "react";
import { TasklistComponent } from "./../tasklistComponent/tasklistComponent.js";
import { AddTaskComponent } from "../addTaskComponent/addTaskComponent.js";

// Verwaltet Kommunikation zwischen Eingabefeld für neue To Dos und der Tasklist, die die To Dos anzeigt.
export const TaskpageComponent = () => {
  const [todoList, setTodoList] = useState([]);

  function addTaskToList(newItem) {
    setTodoList((currentTodoList) => [...currentTodoList, newItem]);
  }

  function deleteTaskFromList(key) {
    console.log("Task deleted");
    console.log(key);
  }

  return (
    <div>
      <AddTaskComponent functionToAddTask={addTaskToList} />
      <TasklistComponent
        functionToDeleteTask={deleteTaskFromList}
        toDos={todoList}
      />
    </div>
  );
};
