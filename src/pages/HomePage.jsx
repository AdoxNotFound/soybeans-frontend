import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import ButtonAppBar from '../components/common/Appbar';
import useToken from '../app/useToken';
import LoginPage from './LoginPage';

const HomePage = () => {
  const {tokens, setTokens, clearTokens } = useToken(); 

  if (!tokens) {
    {return <LoginPage setToken={setTokens}/>}
  }

  return (
    <div>
      <CssBaseline/>
      <ButtonAppBar/>
    </div>
  );
};

export default HomePage

/*<Typography variant='h5' component='h5'>
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
    </FormControl> */