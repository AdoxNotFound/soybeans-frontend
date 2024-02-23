import { Navigate } from "react-router-dom";
import { useApiContext } from '../context/ApiContext';

const PrivateRoute = ({ children }) => {
    const { generalSettings } = useApiContext();
    if (!generalSettings.isLoggedIn) {
        return <Navigate to="/" />;
    }
    return children;
};
export default PrivateRoute;