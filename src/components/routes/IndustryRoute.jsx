import { Navigate } from "react-router-dom";
import { useApiContext } from '../context/ApiContext';

const IndustryRoute = ({ children }) => {
    const { generalSettings } = useApiContext();
    if (generalSettings.role === 'industria') {
        return children;
    }
    return <Navigate to="/home" />;
};
export default IndustryRoute;