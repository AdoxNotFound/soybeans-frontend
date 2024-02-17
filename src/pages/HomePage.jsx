import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import ButtonAppBar from '../components/common/Appbar';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useApiContext } from '../components/context/ApiContext';
import { UserTypes } from '../helpers/UserTypes';
import AdminHomePage from '../pages/AdminHomePage';
import IndustryHomePage from '../pages/IndustryHomePage';

const HomePage = () => {
  const navigate = useNavigate();
  const { settings } = useApiContext();

  const selector = () => {
    if (settings.role === UserTypes[0]) {
      return <AdminHomePage/>;
    } else if (settings.role === UserTypes[1]) {
      return <IndustryHomePage/>;
    }
  };

  return (
    <div>
      <CssBaseline />
        {selector()}
     {/* <ButtonAppBar/> */} 
    </div>
  );
};

export default HomePage
