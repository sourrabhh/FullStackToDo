// src/components/TodoItem.js

import React from "react";
import { Checkbox, IconButton, ListItem, ListItemText, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <Checkbox
        edge="start"
        checked={todo.completed}
        tabIndex={-1}
        disableRipple
        onChange={onToggle}
        inputProps={{ "aria-checked": todo.completed, role: "checkbox" }}
      />
      <ListItemText
        primary={
          <Typography
            variant="body1"
            sx={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "text.secondary" : "text.primary",
            }}
          >
            {todo.title}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default TodoItem;
