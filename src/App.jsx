import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApiProvider } from './components/context/ApiContext';
//import HomePage from './pages/HomePage';
//import AutoLogout from './helpers/AutoLogout';
import LoginPage from './pages/LoginPage';
import AdminHomePage from './pages/AdminHomePage';
import IndustryHomePage from './pages/IndustryHomePage';
import { setupRequestInterceptor, setupResponseInterceptor } from './services/axiosInterceptors';
import axiosInstance from './services/axiosInstance';

function App() {

  //const logoutTime = 1 * 60 * 1000;

    // Configura los interceptores cuando el componente se monta
    useEffect(() => {
      const requestInterceptor = setupRequestInterceptor();
      const responseInterceptor = setupResponseInterceptor();
  
      // Retorna una función de limpieza para desmontar los interceptores cuando el componente se desmonte
      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
      };
    }, []);

  return (
    <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/admin' element={<AdminHomePage />} />
            <Route path='/industry' element={<IndustryHomePage />} />
            <Route path='/*' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
        {/*<AutoLogout logoutTime={logoutTime}/>*/}
    </ApiProvider>
  );
};

export default App
