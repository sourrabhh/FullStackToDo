import React, { useEffect, useRef } from 'react';
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
  const nodeRefs = useRef({}); // To hold refs for each todo

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setTodos(fetchedTodos);
    }

    return () => {
      isMounted = false;
    };
  }, [fetchedTodos, setTodos]);

  const handleToggle = async (id) => {
    let isMounted = true;
    try {
      await toggleTodo(id, (updatedTodos) => {
        if (isMounted) {
          setTodos(updatedTodos);
        }
      });
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
    return () => {
      isMounted = false;
    };
  };

  const handleDelete = async (id) => {
    let isMounted = true;
    try {
      await deleteTodo(id, (updatedTodos) => {
        if (isMounted) {
          setTodos(updatedTodos);
        }
      });
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
    return () => {
      isMounted = false;
    };
  };

  return (
    <>
      <TodoForm />
      <Typography variant="h5" gutterBottom>
        Your Tasks
      </Typography>
      <List>
        <TransitionGroup>
          {todos.map((todo) => {
            // Create a ref for each todo item if not already created
            if (!nodeRefs.current[todo.id]) {
              nodeRefs.current[todo.id] = React.createRef();
            }

            return (
              <CSSTransition
                key={todo.id}
                nodeRef={nodeRefs.current[todo.id]} // Pass the ref here
                timeout={300}
                classNames="fade"
              >
                <div ref={nodeRefs.current[todo.id]}>
                  <TodoItem
                    todo={todo}
                    onToggle={() => handleToggle(todo.id)}
                    onDelete={() => handleDelete(todo.id)}
                  />
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </List>
    </>
  );
};

export default TodoList;
