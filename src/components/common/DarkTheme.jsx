import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#18648c',
        },
        secondary: {
          main: '#f50057',
        },
        background: {
          default: '#d7dbde',
        },
  },
});

export default darkTheme;