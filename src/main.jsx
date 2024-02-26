import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme} from './components/common/Theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ApiProvider, useApiContext } from './components/context/ApiContext.jsx';
//import darkTheme from './components/common/DarkTheme.jsx';

//const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const Root = () => {
  const { themeMode } = useApiContext(); // Mueve esta línea dentro de un componente funcional
  const theme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <React.StrictMode>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>

    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider>
    <Root />
  </ApiProvider>);
