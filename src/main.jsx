import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/common/Theme';
import CssBaseline from '@mui/material/CssBaseline';
//import darkTheme from './components/common/DarkTheme.jsx';

//const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <CssBaseline />
     <App />
    </ThemeProvider>
  </React.StrictMode>,
)
