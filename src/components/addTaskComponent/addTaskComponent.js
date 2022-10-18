import React, { useState } from "react";
import { TasklistComponent } from "./../tasklistComponent/tasklistComponent.js";

export const AddTaskComponent = () => {
  const temporaryTodoList = [];
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function changeHandler(event) {
    let todoInput = event.target.value;
    setNewTodo(todoInput);
  }

  function addTodo() {
    temporaryTodoList.push(newTodo);
    setTodoList(temporaryTodoList);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Tippe etwas..."
          value={newTodo}
          onChange={changeHandler}
        />
        <button type="submit" onClick={addTodo}>
          Hinzufügen
        </button>
      </form>
      <TasklistComponent toDos={todoList} />
    </div>
  );
};
