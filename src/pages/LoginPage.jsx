import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BackgroundImage from '../components/layout/BackgroundImage';
import LoginForm from '../components/loginForm/LoginForm';
import useLoginForm from '../components/loginForm/useLoginForm';
import { loginUser } from '../services/api';
import { useApiContext } from '../components/context/ApiContext';

const LoginPage = ({ setToken }) => {
  const { username, setUsername, password, setPassword } = useLoginForm();
  const { updateSettings } = useApiContext();

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
          // console.log('Token:', data.data.token);
  
          // Guarda la sesión
          setToken(data.data.token);

          // guardardo de los parametros iniciales
          updateSettings({
            token: data.data.token,
            token_type: data.data.token_type,
            username: data.data.user.username,
            role: data.data.user.role,
          });

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