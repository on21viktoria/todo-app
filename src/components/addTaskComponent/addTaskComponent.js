import React, { useState } from "react";

// Nimmt Eingaben von Nutzer entgegen und übergibt sie mit Klick auf den Button
// als Parameter an die Funktion functionToAddTask der Elternkomponente.
export const AddTaskComponent = ({ functionToAddTask }) => {
  const [newTodo, setNewTodo] = useState("");

  function changeHandler(event) {
    let todoInput = event.target.value;
    setNewTodo(todoInput);
  }

  function addItem() {
    functionToAddTask(newTodo);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Tippe etwas..."
        value={newTodo}
        onChange={changeHandler}
      />
      <button onClick={addItem}>Hinzufügen</button>
    </div>
  );
};
