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

  // const fetchTodos = () => {
  //   axios.get('http://localhost:8080/api/todos').then((response) => {
  //     setTodos(response.data);
  //   });
  // };

  const fetchTodos = () => {
    axios.get('http://localhost:8080/api/todos')
      .then((response) => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
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
    console.log("Deleting todo with id:", id);
  
    // Optimistically update UI by removing the todo
    const updatedTodos = todos.filter(t => t.id !== id);
    setTodos(updatedTodos);
    
    // Make the API call
    axios.delete(`http://localhost:8080/api/todos/${id}`)
      .then(() => {
        console.log("Todo deleted successfully");
      })
      .catch(error => {
        console.error("Error deleting todo:", error);
        // If delete fails, revert the change
        setTodos([...todos]);
      });
  };
  
  // const deleteTodo = (id) => {
  //   console.log("in delete todo")
  //   axios.delete(`http://localhost:8080/api/todos/${id}`).then(() => {
  //     setTodos(todos.filter((t) => t.id !== id));
  //   });
  // };

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
