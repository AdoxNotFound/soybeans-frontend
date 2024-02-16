import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import useToken from '../services/useToken';
import LoginPage from './LoginPage';
import { Typography, Box, Button } from '@mui/material';
import { useApiContext } from '../components/context/ApiContext';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redireccionar

const IndustryHomePage = () => {
    const {tokens, setTokens, clearTokens } = useToken(); 

    const { settings } = useApiContext();
    const navigate = useNavigate(); // Obtiene la función navigate
  
    const handleLogout = () => {
      // Llama a la función para limpiar los tokens o las credenciales de usuario
      clearTokens();
      // Redirige al usuario a la página de inicio de sesión
      navigate('/');
    };
  
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
              <Typography>
              {settings.username}
              </Typography>
              <Typography>
              {settings.role}
              </Typography>
            <Button
            type='button'
            onClick={handleLogout} // Llama a la función handleLogout al hacer clic
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            >
            Cerrar sesión
            </Button>
          </Box>
      </div>
  );
};

export default IndustryHomePage;