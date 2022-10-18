import React, { useState } from "react";
import "./addTaskComponent.css";

// Nimmt Eingaben von Nutzer entgegen und übergibt sie mit Klick auf den Button
// als Parameter an die Funktion functionToAddTask der Elternkomponente.
export const AddTaskComponent = ({ functionToAddTask }) => {
  const [newTodo, setNewTodo] = useState([]);

  function changeHandler(event) {
    const newTodoObject = {
      id: new Date().getTime(),
      taskName: event.target.value,
    };
    setNewTodo(newTodoObject);
  }

  function addItem() {
    functionToAddTask(newTodo);
    setNewTodo({});
  }

  return (
    <div>
      <input
        id="taskInput"
        type="text"
        placeholder="Tippe etwas..."
        value={newTodo.taskName || ""}
        onChange={changeHandler}
      />
      <button className="addTaskComponent_button" onClick={addItem}>
        Hinzufügen
      </button>
    </div>
  );
};
