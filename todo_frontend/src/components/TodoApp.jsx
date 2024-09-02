// src/components/TodoApp.js

import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import TodoList from './TodoList';

const TodoApp = () => {
  return (
    <>
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todo Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <TodoList />
      </Container>
    </>
  );
};

export default TodoApp;
