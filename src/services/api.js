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
    const response = await axios.post('http://ec2-3-141-44-202.us-east-2.compute.amazonaws.com:8000/api/token', credentials, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error al realizar la solicitud Axios:', error);
    throw error;
  }
};