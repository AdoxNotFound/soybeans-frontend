import { createContext, useContext, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [settings, setSettings] = useState({
            token: 'empty',
            username: 'user',
            role: 'user', 
            isLoggedIn: false,
        });

    const updateSettings = (newSettings) => {
        setSettings({...settings, ...newSettings});
    };

    return (
        <ApiContext.Provider value={{ settings, updateSettings}}>
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
