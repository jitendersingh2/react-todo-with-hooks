import React from "react";
import './Todo.css';

export function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button className="btn complete-button" onClick={() => completeTodo(index)}>Complete</button>
        <button className="btn delete-button" onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}
