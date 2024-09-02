// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // You can switch to 'dark' mode if preferred
    primary: {
      main: '#1976d2', // Blue color
    },
    secondary: {
      main: '#dc004e', // Pink color
    },
    background: {
      default: '#f5f5f5', // Light gray background
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
