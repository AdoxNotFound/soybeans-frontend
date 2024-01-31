import { createContext, useContext, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [apiResponse, setApiResponse] = useState(null);

    const storeApiResponse = (response) => {
        setApiResponse(response.data);
    };

    return (
        <ApiContext.Provider value={{ apiResponse, storeApiResponse}}>
            {children}
        </ApiContext.Provider>
    );
};

const useApiContext = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApiContext must be used within an ApiProvider');
    }
    return context
};

export { ApiProvider, useApiContext };
