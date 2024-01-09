import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';

/* Parte logica
Todavia no esa funcionado el login porque se debe habilitar el cors*/ 
async function LoginUser(credentials) {
  try {
    const response = await axios.post('http://caniob.org:9000/api/token', credentials, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      // Agrega cualquier configuración adicional aquí si es necesario
    });

    return response.data;
  } catch (error) {
    console.error('Error al realizar la solicitud Axios:', error);
    throw error;
  }
}

const Login = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await LoginUser({
        username,
        password,
      });

      setToken(token);
      console.log(token);
    } catch (error) {
      // Manejar el error según sea necesario
    }
  };
  /* parte grafica */
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Box
          sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }}
      >
        <Typography component="h1" variant="h5">
          Iniciar sesion
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Usuario"
          name="username"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Recordarme"
          />
          <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          >
          Iniciar sesión
          </Button>
        </Box>
      </Box>
    </Grid>
{/*      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)} required placeholder="JohnDoe"
        />
        <p>Password</p>
        <input
          type="password" onChange={(e) => setPassword(e.target.value)} required
          placeholder="Please enter a strong password"
        />
        <button type="submit">Submit</button>
        <div>
          <p>
            <input type="checkbox" />Remember Me
          </p>
        </div>
      </form>
  */}
  <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
  </Grid>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
