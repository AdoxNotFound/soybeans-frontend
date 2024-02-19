import { createContext, useContext, useState } from "react";

const IndustryContext = createContext();

const ApiProvider = ({ children }) => {
    const [settings, setSettings] = useState({  
        peroidName: 'empty',
        year: 2020,
        month: 1,
        biweekly: 1,
        startDate: "2024-02-01",
        endDate: "2024-02-07",
        limitDate: "2024-02-15",
        status: 'undefined',
        industryOptions: ['option1']
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

const useIndustryContext = () => {
    const context = useContext(IndustryContext);
    if (!context) {
        throw new Error('useIndustrContext must be used within an ApiProvider');
    }
    return context
};

export { ApiProvider, useIndustryContext };
