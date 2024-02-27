import { green, blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const typo = {
  
    fontFamily: ["Source Serif 4", "serif"].join(","),
    fontSize: 14,
    h1: {
      fontFamily: ["Source Serif 4", "serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Source Serif 4", "serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Source Serif 4", "serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Source Serif 4", "serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Source Serif 4", "serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Source Serif 4", "serif"].join(","),
      fontSize: 14,
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
    text: {
      primary: '#000000de',
      secondary: '#00000099',
      disabled: '#00000061',
    },
    divider: '#0000001f',
  },
  typography: typo,
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
      light: blueGrey[50],
      main: blueGrey[200],
      dark: blueGrey[500],
      contrastText: '#fff',
    },
    background: {
      default: '#2A3447',
      paper: '#2A3447',
    },
    text: {
      primary: '#fff',
      secondary: '#ffffffb3',
      disabled: '#ffffff80',
      icon: '#ffffff80',
    },
    divider: '#ffffff1f',
  },
  typography: typo,
});

export { lightTheme, darkTheme };