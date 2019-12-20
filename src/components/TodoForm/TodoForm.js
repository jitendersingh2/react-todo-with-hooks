import React, { useState } from 'react';
import './TodoForm.css';

export function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-todo-input"
        value={value}
        placeholder="Add Todo"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}