import { lightGreen, blueGrey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
  
const Theme = createTheme({

    palette: {
      // palette values for dark mode
      primary: {
        light: lightGreen[200],
        main: lightGreen[500],
        dark: lightGreen[700],
        contrastText: '#000',
      },
      secondary: {
        light: blueGrey[200],
        main: blueGrey[500],
        dark: blueGrey[700],
        contrastText: '#fff',
      },
      background: {
        default: '#f8fff8',
        paper: lightGreen[50],
            },
          },
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
});

export default Theme;