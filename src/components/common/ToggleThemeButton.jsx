import React from 'react';
import { useApiContext } from '../context/ApiContext';
import Button from '@mui/material/Button';

const ToggleThemeButton = () => {
    const { themeMode, toggleTheme } = useApiContext();

    return (
        <Button onClick={toggleTheme}>
            {themeMode === 'light' ? 'dark' : 'light'}
        </Button>
    );
};

export default ToggleThemeButton;