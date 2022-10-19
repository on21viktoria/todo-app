import React, { useState } from "react";
import { TasklistComponent } from "./../tasklistComponent/tasklistComponent.js";
import { AddTaskComponent } from "../addTaskComponent/addTaskComponent.js";
import "./taskpageComponent.css";

// Verwaltet Kommunikation zwischen Eingabefeld für neue To Dos und der Tasklist, die die To Dos anzeigt.
export const TaskpageComponent = () => {
  const [todoList, setTodoList] = useState([]);
  const [noTasksYet, setNoTasksToFalse] = useState(true);

  function addTaskToList(newItem) {
    setNoTasksToFalse(false);
    setTodoList((currentTodoList) => [...currentTodoList, newItem]);
  }

  function deleteTaskFromList(toDoId) {
    setTodoList((currentTodoList) =>
      currentTodoList.filter((item) => item.id !== toDoId)
    );
  }

  function resetList() {
    setTodoList([]);
    setNoTasksToFalse(true)
  }

  function saveChangesToTask(changedTask) {
    const changedTodoList = todoList.map(task => {
      if(task.id === changedTask.id) {
        return {
          ...task,
          taskName: changedTask.taskName,
        };
      } else {
        return task;
      }
    });
    setTodoList(changedTodoList);
  }

  return (
    <div className="border border-secondary p-5 w-80 bg-light">
      <h1 className="taskpage-component mb-5">Deine To Do Liste</h1>
      <AddTaskComponent functionToAddTask={addTaskToList} />
      {noTasksYet === true | todoList.length === 0?
      (<h3 className="taskpage-component">Du hast zurzeit keine Aufgaben.</h3>) :
      (<><TasklistComponent
        functionToDeleteTask={deleteTaskFromList}
        functionToSaveChanges={saveChangesToTask}
        toDos={todoList} /><button className="btn btn-outline-danger btn-sm" onClick={resetList}>
          Liste zurücksetzen
        </button></>)}
      
    </div>
  );
};
