import { createContext, useContext, useState } from "react";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [settings, setSettings] = useState({
            token: 'empty',
            username: 'user',
            role: 'user', 
            isLoggedIn: false,
            actualPeriod : {
                name: 'empty',
                year: 2020,
                month: 1,
                biweekly: 1,
                status: 'undefined'
            },
            industryOptions: ['option1']
        });

        //const [firstResponseReceived, setFirstResponseReceived] = useState(false);

    const updateSettings = (newSettings) => {
        setSettings({...settings, ...newSettings});
    };

    return (
        <ApiContext.Provider value={{ settings, updateSettings}}>
           { /*, firstResponseReceived, setFirstResponseReceived}}>*/}
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
