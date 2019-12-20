import React from "react";
import Todo from '../Todo';

export const Todos = ({ todos, completeTodo, removeTodo }) => (
  <>
    {todos.map((todo, index) => (
      <Todo
        key={index}
        index={index}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    ))}
  </>
);
