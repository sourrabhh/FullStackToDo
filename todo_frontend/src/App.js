// src/App.js

import React from 'react';
import TodoApp from './components/TodoApp';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoApp />
    </ThemeProvider>
  );
}

export default App;


