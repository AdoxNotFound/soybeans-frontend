
import axiosInstance from './axiosInstance';


export const userLogin = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response;
  } catch (error) {
    console.error('Error al realizar la solicitud Axios:', error);
    throw error;
  }
};

export const userReconection = async (userToken) => {
  try {
    const response = await axiosInstance.get('/auth/reconection', {
      headers: {
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
    const response = await axiosInstance.post('/auth/logout', null, {
      headers: {
        'Authorization': userToken
      },
    });
    return response;
  } catch (error) {
    console.error('Error al realizar la solicitud Axios:', error);
    throw error;
  }
};