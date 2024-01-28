import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BackgroundImage from '../components/layout/BackgroundImage';
import LoginForm from '../components/loginForm/LoginForm';
import useLoginForm from '../components/loginForm/useLoginForm';
import { loginUser } from '../services/api';

const LoginPage = ({ setToken }) => {
  const { username, setUsername, password, setPassword } = useLoginForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({
        username,
        password,
      });

      if (response && response.data) {
        const { data } = response;
        
        if (data.data.token && data.data.user) {
          console.log('User:', data.data.user);
          console.log('Token:', data.data.token);
  
          // Guarda la sesión
          setToken(data.data.token);
        } else {
          console.error('La respuesta no contiene token o user.');
        }
      } else {
        console.error('La respuesta no es válida.');
      }
    } catch (error) {
      // Manejar el error según sea necesario
      console.error('Error al realizar la solicitud:', error);
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <LoginForm handleSubmit={handleSubmit} setPassword={setPassword} setUsername={setUsername}/>
      </Grid>
      <BackgroundImage />
    </Grid>
  );
};

export default LoginPage;