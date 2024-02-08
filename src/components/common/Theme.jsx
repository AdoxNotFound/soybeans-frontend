import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
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

export default theme;