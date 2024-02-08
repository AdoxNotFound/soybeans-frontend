import axios from 'axios';

// Configurar un interceptor de respuesta
axios.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
  }, error => {
    console.error('Axios Request Error:', error);
    return Promise.reject(error);
  });
  
  axios.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
  }, error => {
    console.error('Axios Response Error:', error);
    return Promise.reject(error);
  });

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post('https://apicaniob.caniob.org/api/auth/login', credentials, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    return response;
  } catch (error) {
    console.error('Error al realizar la solicitud Axios:', error);
    throw error;
  }
};

export const userReconection = async (userToken) => {
  try {
    const response = await axios.get('https://apicaniob.caniob.org/api/auth/reconection', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': userToken
      },
    });
    return response;
  } catch (error) {
    console.error('Error al realizar la solicitud Axios:', error);
    throw error;
  }
};

export const userLogout = async(userToken) => {
  try {
    const response = await axios.post('https://apicaniob.caniob.org/api/auth/logout', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': userToken
      },
    });
    return response;
  } catch (error) {
    console.error('Error al realizar la solicitud Axios:', error);
    throw error;
  }
};