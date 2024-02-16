import React, { useEffect } from 'react';
import useToken from '../services/useToken'; 

const AutoLogout = ({ logoutTime }) => {
  const { clearTokens } = useToken();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Llama a clearTokens después de 10 minutos (o el tiempo que desees)
      clearTokens(); 

      // Puedes redirigir a la página de inicio de sesión o hacer otras acciones necesarias
      // history.push('/login');
    }, logoutTime);

    // Limpia el temporizador si el componente se desmonta antes de que se alcance el tiempo de cierre de sesión
    return () => clearTimeout(timeoutId);
  }, [clearTokens, logoutTime]);

  // Este componente no renderiza nada, ya que solo se utiliza para manejar la lógica de cierre de sesión automático.
  return null;
};

export default AutoLogout;