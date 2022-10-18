import React, { useState } from "react";
import { TasklistComponent } from "./../tasklistComponent/tasklistComponent.js";
import { AddTaskComponent } from "../addTaskComponent/addTaskComponent.js";
import "./taskpageComponent.css";

// Verwaltet Kommunikation zwischen Eingabefeld für neue To Dos und der Tasklist, die die To Dos anzeigt.
export const TaskpageComponent = () => {
  const [todoList, setTodoList] = useState([]);

  function addTaskToList(newItem) {
    setTodoList((currentTodoList) => [...currentTodoList, newItem]);
  }

  function deleteTaskFromList(toDoId) {
    setTodoList((currentTodoList) =>
      currentTodoList.filter((item) => item.id !== toDoId)
    );
  }

  function resetList() {
    setTodoList([]);
  }

  return (
    <div>
      <AddTaskComponent functionToAddTask={addTaskToList} />
      <TasklistComponent
        functionToDeleteTask={deleteTaskFromList}
        toDos={todoList}
      />
      <button className="taskpageComponent_button" onClick={resetList}>
        Liste zurücksetzen
      </button>
    </div>
  );
};
