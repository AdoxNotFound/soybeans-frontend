import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, Box, Button } from '@mui/material';
import { useApiContext } from '../components/context/ApiContext';
import LogoutHandler from '../helpers/LogoutHandler';

const IndustryFormPage = () => {
    const { generalSettings } = useApiContext();
    
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
            Nuevo formulario
          </Typography>
              <Typography>
              {generalSettings.username}
              </Typography>
              <Typography>
              {generalSettings.role}
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
      </div>
  );
};

export default IndustryFormPage;