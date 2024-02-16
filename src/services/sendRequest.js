
import axiosInstance from './axiosInstance';

const sendRequest = async (method, url, data = null, headers = null) => {
    try {
      const response = await axiosInstance({
        method,
        url,
        data,
        headers,
      });
      return response;
    } catch (error) {
      console.error('Error al realizar la solicitud Axios:', error);
      throw error;
    }
  };

  export default sendRequest;

  // Configurar un interceptor de respuesta
/*
  axiosInstance.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
  }, error => {
    console.error('Axios Request Error:', error);
    return Promise.reject(error);
  });
  
  axiosInstance.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
  }, error => {
    console.error('Axios Response Error:', error);
    return Promise.reject(error);
  });
*/
