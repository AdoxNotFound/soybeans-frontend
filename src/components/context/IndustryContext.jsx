import { createContext, useContext, useState } from "react";

const IndustryContext = createContext();

const IndustryProvider = ({ children }) => {
    const [industrySettings, setIndustrySettings] = useState({  
        periodName: 'empty',
        year: 2020,
        month: 1,
        biweekly: 1,
        startDate: "2024-02-01",
        endDate: "2024-02-07",
        limitDate: "2024-02-15",
        status: 'undefined',
        industryOptions: ['option1'],
    });

    const updateIndustrySettings = (newSettings) => {
        setIndustrySettings({...industrySettings, ...newSettings});
    };

    return (
        <ApiContext.Provider value={{ industrySettings, updateIndustrySettings}}>
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

export { IndustryProvider, useIndustryContext };
