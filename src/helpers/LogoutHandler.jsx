
import React from 'react';
import { useApiContext } from '../components/context/ApiContext';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redireccionar
import { userLogout } from '../services/authService';
import useToken from '../services/useToken';

const LogoutHandler = () => {
    const { clearTokens } = useToken(); 
    const { settings } = useApiContext();
    const navigate = useNavigate(); // Obtiene la función navigate

    const handleLogout = async () => {

        try {
            const response = await userLogout(settings.token);
            if (response && response.data) {
                console.log(response.data.data);
                // Llama a la función para limpiar los tokens o las credenciales de usuario
                clearTokens();
                // Redirige al usuario a la página de inicio de sesión
                navigate('/');
            } else {
                console.error('La respuesta de userLogout no es válida.');
            }
        } catch (error) {
            console.error('Error al realizar la solicitud de userLogout:', error);
        }
    };
    return handleLogout;
};
export default LogoutHandler;
