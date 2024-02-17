import { Navigate } from "react-router-dom";
import { useApiContext } from '../context/ApiContext';

const PrivateRoute = ({ children }) => {
    const { settings } = useApiContext();
    if (!settings.isLoggedIn) {
        return <Navigate to="/" />;
    }
    return children;
};
export default PrivateRoute;