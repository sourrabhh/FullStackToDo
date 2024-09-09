import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { List, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { todosState, todosQuery, toggleTodo, deleteTodo } from './todoState';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './TodoList.css'; // Import CSS for transitions

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const fetchedTodos = useRecoilValue(todosQuery);

  useEffect(() => {
    setTodos(fetchedTodos);
  }, [fetchedTodos, setTodos]);

  const handleToggle = async (id) => {
    await toggleTodo(id, setTodos);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id, setTodos);
  };

  return (
    <>
      <TodoForm />
      <Typography variant="h5" gutterBottom>
        Your Tasks
      </Typography>
      <List>
        <TransitionGroup>
          {todos.map((todo) => (
            <CSSTransition
              key={todo.id}
              timeout={300}
              classNames="fade"
            >
              <TodoItem
                todo={todo}
                onToggle={() => handleToggle(todo.id)}
                onDelete={() => handleDelete(todo.id)}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </List>
    </>
  );
};

export default TodoList;
