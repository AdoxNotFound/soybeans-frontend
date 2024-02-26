import React from 'react';
import { Typography, Box } from '@mui/material';
import { useApiContext } from '../components/context/ApiContext';
import IndustryFormTable from '../components/forms/IndustryFormTable';

const IndustryFormPage = () => {
    const { generalSettings } = useApiContext();
    
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
            Nuevo formulario
          </Typography>
              <Typography>
              {generalSettings.username}
              </Typography>
              <Typography>
              {generalSettings.role}
              </Typography>
          <IndustryFormTable />
          </Box>
      </div>
  );
};

export default IndustryFormPage;