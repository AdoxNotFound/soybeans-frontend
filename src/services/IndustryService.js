
import axiosInstance from './axiosInstance';

export const industryReconection = async (userToken) => {
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

// incluir solicitudes propias del usuario industria
// /api/industry/settings
// /api/industry/import-xls
// api/industry/save-acopio

/*

// Función para llamar a userReconection
    const fetchUserReconection = async (token) => {
      try {
        const response = await userReconection(token);
        // Verifica si la respuesta es válida y actualiza el contexto de la API
        if (response && response.data) {
        const optionNames = response.data.data.options.map(option => option.short_name);

        updateSettings({
          actualPeriod: {
            name: response.data.data.period.name,
            year: response.data.data.period.year,
            month: response.data.data.period.month,
            biweekly: response.data.data.period.biweekly,
            status: response.data.data.period.status
          },
          industryOptions: optionNames
        });
  
          console.log(optionNames)
        } else {
          console.error('La respuesta de userReconection no es válida.');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud de userReconection:', error);
      }
    };

*/