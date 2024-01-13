import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
/*import Grid from '@mui/material/Grid';*/
import Typography from '@mui/material/Typography';
import ButtonAppBar from '../components/Appbar';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import useToken from '../app/useToken';
import LoginPage from './LoginPage';
import Paper from '@mui/material/Paper';

const HomePage = () => {
  const {tokens, setTokens, clearTokens } = useToken(); 

  if (!tokens) {
    {return <LoginPage setToken={setTokens}/>}
  }

  return (
    <div>
      <CssBaseline/>
        <ButtonAppBar/>
        <Box
          sx={{ my: 2, mx: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', }}
      >
        <Typography variant='h3' component='h3'>
          Página Principal
        </Typography>
        <Typography variant='h5' component='h5'>
          Seleccione la gestión
        </Typography>
        <FormControl fullWidth sx={{width: 150, marginY: 3}}>
          <InputLabel id="demo-simple-select-label">Gestión</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Year"
            >
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2024}>2024</MenuItem>
            </Select>
          </FormControl>
        <Typography paragraph>
          Descripcioon de la tabla
        </Typography>
        <Paper>
          
        </Paper>
        <button onClick={clearTokens}>Cerrar sesion</button>
      </Box>
    </div>
  );
};

export default HomePage