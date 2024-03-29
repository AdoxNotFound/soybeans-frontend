import React from 'react'
import { Typography, Box, Button } from '@mui/material';
import { useApiContext } from '../components/context/ApiContext';
import LogoutHandler from '../helpers/LogoutHandler';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import useToken from '../services/useToken';

const AdminHomePage = () => {
  const { generalSettings } = useApiContext();
  const {tokens, clearTokens } = useToken(); 
  const navigate = useNavigate(); // Obtiene la función navigate

  //const handleLogout = LogoutHandler( tokens,  clearTokens, navigate);

  return (
    <div>
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
            {generalSettings.username}
            </Typography>
            <Typography>
            {generalSettings.role}
            </Typography>
          <Button
          type='button'
          onClick={LogoutHandler( tokens,  clearTokens, navigate)} // Llama a la función handleLogout al hacer clic
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

export default AdminHomePage;