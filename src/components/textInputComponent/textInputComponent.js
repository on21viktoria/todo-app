import React, { useState } from "react";

export const TextInputComponent = ({ funktionVonElternKomponente }) => {
  const [newTodo, setNewTodo] = useState("");

  function changeHandler(event) {
    let todoInput = event.target.value;
    setNewTodo(todoInput);
  }

  function addItem() {
    funktionVonElternKomponente(newTodo);
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
