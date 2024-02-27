import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';

const LoginForm = ({ handleSubmit, setUsername, setPassword }) => {
    return (
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin:'10px'}}>
        <img src='/green_logo.svg' alt='RIQS logo' width={150}/>
        <Typography variant='h1'>
          RIQS
        </Typography>
        </Box>
        
        <Typography variant="h4" >
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
    );
  };
  
  export default LoginForm;