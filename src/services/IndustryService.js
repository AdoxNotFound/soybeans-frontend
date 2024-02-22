
import axiosInstance from './axiosInstance';

const industryReconection = async (userToken) => {
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

export default industryReconection;
// incluir solicitudes propias del usuario industria
// /api/industry/settings
// /api/industry/import-xls
// api/industry/save-acopio
