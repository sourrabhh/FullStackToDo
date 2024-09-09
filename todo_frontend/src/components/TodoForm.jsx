// src/components/TodoForm.js

import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { TextField, Button, Paper, Box, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { todosState, addTodo } from './todoState';

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);
  const setTodos = useSetRecoilState(todosState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      setLoading(true);
      await addTodo(newTodo, setTodos);
      setNewTodo('');
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
      <form onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center">
          <TextField
            label="Add new task"
            variant="outlined"
            fullWidth
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            disabled={loading}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            size="large"
            sx={{ marginLeft: 2, padding: '16px' }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : <AddIcon />}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default TodoForm;
