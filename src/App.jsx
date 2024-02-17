import './App.css';
import React, { useEffect } from 'react';
import { ApiProvider } from './components/context/ApiContext';
import { setupRequestInterceptor, setupResponseInterceptor } from './services/axiosInterceptors';
import axiosInstance from './services/axiosInstance';
import AppRoutes from './components/routes/AppRoutes';

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
      <AppRoutes></AppRoutes>
        {/*<AutoLogout logoutTime={logoutTime}/>*/}
    </ApiProvider>
  );
};

export default App
