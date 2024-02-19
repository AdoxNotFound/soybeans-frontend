import React,{ useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BackgroundImage from '../components/login/BackgroundImage';
import LoginForm from '../components/login/LoginForm';
import { useApiContext } from '../components/context/ApiContext';
import { useNavigate } from 'react-router-dom';
import useToken from '../services/useToken';
import { handleSubmit } from '../helpers/handleLoginResponse';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { updateSettings } = useApiContext();
  const { setTokens } = useToken(); 
  const navigate = useNavigate();

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <LoginForm handleSubmit={(e) => handleSubmit(e, username, password, setTokens,
         updateSettings, navigate)} setPassword={setPassword} setUsername={setUsername} />
      </Grid>
      <BackgroundImage />
    </Grid>
  );
};

export default LoginPage;