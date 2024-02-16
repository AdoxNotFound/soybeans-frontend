import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import useToken from '../services/useToken';
import LoginPage from './LoginPage';
import { Typography, Box, Button } from '@mui/material';

const AdminHomePage = () => {
  const {tokens, setTokens, clearTokens } = useToken(); 

  if (!tokens) {
    {return <LoginPage setToken={setTokens}/>}
  }

  return (
    <div>
      <CssBaseline />
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Pagina de Inicio
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Typography>
                Nombre de usuario
            </Typography>
            <Typography>
                Tipo de usuario
            </Typography>
          <Button
          type='button'
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          >
          Cerrar sesión
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default AdminHomePage;