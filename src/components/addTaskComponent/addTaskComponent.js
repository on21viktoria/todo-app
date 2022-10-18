import React, { useState } from "react";
import { TasklistComponent } from "./../tasklistComponent/tasklistComponent.js";
import { TextInputComponent } from "./../textInputComponent/textInputComponent.js";

export const AddTaskComponent = () => {
  const [todoList, setTodoList] = useState([]);

  function addTodo(newItem) {
    setTodoList((bestehendesArray) => [...bestehendesArray, newItem]);
  }

  return (
    <div>
      <TextInputComponent funktionVonElternKomponente={addTodo} />
      <TasklistComponent toDos={todoList} />
    </div>
  );
};
