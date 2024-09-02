// src/components/TodoList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { TransitionGroup } from 'react-transition-group';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios.get('http://localhost:8080/api/todos').then((response) => {
      setTodos(response.data);
    });
  };

  const addTodo = (title) => {
    axios
      .post('http://localhost:8080/api/todos', { title, completed: false })
      .then((response) => {
        setTodos([response.data, ...todos]);
      });
  };

  const toggleTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    axios
      .put(`http://localhost:8080/api/todos/${id}`, {
        ...todo,
        completed: !todo.completed,
      })
      .then((response) => {
        setTodos(
          todos.map((t) =>
            t.id === id ? { ...t, completed: response.data.completed } : t
          )
        );
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8080/api/todos/${id}`).then(() => {
      setTodos(todos.filter((t) => t.id !== id));
    });
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <Typography variant="h5" gutterBottom>
        Your Tasks
      </Typography>
      <TransitionGroup>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </TransitionGroup>
    </>
  );
};

export default TodoList;
