import React from "react";
import { Checkbox, IconButton, ListItem, ListItemText, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ todo, onToggle, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
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
        onChange={() => onToggle(todo.id)}
      />
      <ListItemText
        primary={
          <Typography
            variant="body1"
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.title}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default Todo;

