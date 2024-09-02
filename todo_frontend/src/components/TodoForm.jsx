// src/components/TodoForm.js

import React, { useState } from 'react';
import { TextField, Button, Paper, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ padding: 2, marginBottom: 4 }}
    >
      <form onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center">
          <TextField
            label="Add new task"
            variant="outlined"
            fullWidth
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
            sx={{ marginLeft: 2, padding: '16px' }}
          >
            <AddIcon />
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default TodoForm;
