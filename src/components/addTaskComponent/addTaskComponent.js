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
    <div className="m-auto mb-5 input-group w-50">
      <input
        className="me-4 form-control"
        type="text"
        placeholder="Tippe etwas..."
        value={newTodo.taskName || ""}
        onChange={changeHandler}
      />
      <button className="btn btn-outline-success rounded-circle" onClick={addItem}>
        <i className="bi bi-plus-lg "></i>
      </button>
    </div>
  );
};
