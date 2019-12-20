import React, { useState } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import { TODOS } from './constants';
import './App.css';

function App() {
  const [todos, setTodos] = useState(TODOS);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <header className="app-header">ADVANCED TODO APP</header>
      <div className="todo-list">
        <Todos todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
