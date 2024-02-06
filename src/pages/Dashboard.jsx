import {React, useState} from 'react'
import useToken from '../app/useToken'
import Button from '@mui/material/Button';
import BasicTable from '../components/common/Table';
import BasicBars from '../components/common/Barchart';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Dashboard = () => {
  const {tokens, setTokens, clearTokens } = useToken(); 

  //boton de logout, se debe agregar a parte, mas adelate
 
  return (
        <Box sx={{ p: 3 }}>
          <Grid container spacing={2}> {/* Utiliza Grid container para crear la estructura de dos columnas */}
            {/* Primera columna */}
            <Grid item xs={12} md={4}> {/* Esto ocupará 6 columnas de un total de 12, es decir, la mitad */}
              <BasicBars title='Grano Acopiado' />
              <BasicBars title='Grano Cerrado' />
            </Grid>
            {/* Segunda columna */}
            <Grid item xs={12} md={8}> {/* Esto ocupará 6 columnas de un total de 12, es decir, la mitad */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <BasicTable />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
              <Button variant="outlined" sx={{ mb: 1 }}>Ingresar nuevo formulario</Button>
              <Button onClick={clearTokens}>Cerrar sesión</Button>
            </Box>
          </Box>
            </Grid>
          </Grid>
        </Box>
  )
}

export default Dashboard