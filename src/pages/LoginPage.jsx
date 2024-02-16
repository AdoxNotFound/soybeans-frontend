import React,{ useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BackgroundImage from '../components/login/BackgroundImage';
import LoginForm from '../components/login/LoginForm';
import { userLogin, userReconection } from '../services/authService';
import { useApiContext } from '../components/context/ApiContext';

const LoginPage = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { updateSettings } = useApiContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin({
        username,
        password,
      });

      if (response && response.data) {
        const { data } = response;
        
        if (data.data.token && data.data.user) {
          // Guarda la sesión
          setToken(data.data.token);

          // guardardo de los parametros iniciales
          updateSettings({
            token: data.data.token_type + ' ' + data.data.token,
            username: data.data.user.username,
            role: data.data.user.role,
          });

          if (data.data.user.role === 'industria') {
            await fetchUserReconection(data.data.token_type + ' ' + data.data.token);
          } else {
            console.log('Otro tipo de usuario');
          }

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

    // Función para llamar a userReconection
    const fetchUserReconection = async (token) => {
      try {
        const response = await userReconection(token);
        // Verifica si la respuesta es válida y actualiza el contexto de la API
        if (response && response.data) {
        const optionNames = response.data.data.options.map(option => option.short_name);

        updateSettings({
          actualPeriod: {
            name: response.data.data.period.name,
            year: response.data.data.period.year,
            month: response.data.data.period.month,
            biweekly: response.data.data.period.biweekly,
            status: response.data.data.period.status
          },
          industryOptions: optionNames
        });
  
          console.log(optionNames)
        } else {
          console.error('La respuesta de userReconection no es válida.');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud de userReconection:', error);
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