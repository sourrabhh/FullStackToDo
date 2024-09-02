// src/components/TodoItem.js

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Checkbox,
  Box,
  Fade,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <Fade in={true}>
      <Card
        variant="outlined"
        sx={{
          marginBottom: 2,
          backgroundColor: todo.completed ? '#e0f7fa' : '#fff',
          borderLeft: `6px solid ${
            todo.completed ? '#4caf50' : '#f44336'
          }`,
        }}
      >
        <CardContent>
          <Box display="flex" alignItems="center">
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              color="primary"
            />
            <Box flexGrow={1}>
              <Typography
                variant="body1"
                sx={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  color: todo.completed ? 'text.secondary' : 'text.primary',
                }}
              >
                {todo.title}
              </Typography>
            </Box>
            <IconButton color="secondary" onClick={() => onDelete(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Fade>
  );
};

export default TodoItem;
