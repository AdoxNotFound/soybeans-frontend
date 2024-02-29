
import { userLogin } from '../services/authService';
import { UserTypes } from './UserTypes';

const handleLoginResponse = (response, setTokens, updateSettings, navigate) => {
  if (response && response.data) {
    const { data } = response;
    if (data.data.token && data.data.user) {
    // Guarda la sesión
      setTokens(data.data.token_type + ' ' + data.data.token);
      // Guardado de los parametros iniciales
      updateSettings({
        token: data.data.token_type + ' ' + data.data.token,
        username: data.data.user.username,
        role: data.data.user.role,
        isLoggedIn: true,
      });
  
      if (data.data.user.role === UserTypes[0]) {
        return navigate('/admin');
      } else if (data.data.user.role === UserTypes[1]) {
        return navigate('/industry');
      }

    } else {
      console.error('La respuesta no contiene token o user.');
    }
  } else {
    console.error('La respuesta no es válida.');
  }
};
  
export const handleSubmit = async (e, username, password,
    setTokens, updateSettings, navigate) => {
  e.preventDefault();
  try {
    const response = await userLogin({
      username,
      password,
  });
    handleLoginResponse(response, setTokens, updateSettings, navigate);
  } catch (error) {
    // Manejar el error según sea necesario
    console.error('Error al realizar la solicitud:', error);
  }
};