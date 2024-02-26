import { green, blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const typography = {
  typography: {
    fontFamily: ["Source Sans 3", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
};
  
const lightTheme = createTheme({
  palette: {
    primary: {
      light: green[200],
      main: green[500],
      dark: green[700],
      contrastText: '#000',
    },
    secondary: {
      light: blueGrey[200],
      main: blueGrey[500],
      dark: blueGrey[700],
      contrastText: '#fff',
    },
  typography: typography,
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      light: green[50],
      main: green[200],
      dark: green[500],
      contrastText: '#000',
    },
    secondary: {
      light: blueGrey[200],
      main: blueGrey[500],
      dark: blueGrey[700],
      contrastText: '#fff',
    },
    background: {
      default: '#2A3447',
      paper: '#2A3447',
    },
  },
  typography: typography,
});

export { lightTheme, darkTheme };