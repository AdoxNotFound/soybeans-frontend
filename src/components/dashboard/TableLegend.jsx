import React from 'react';
import { Declared, NotDeclared, LateDeclared, Blocked, DeclarationEnabled, Observed } from './Icons';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

// Define los datos de la leyenda como un array de objetos
const legendData = [
    { icon: <Declared size={10}/>, label: 'Quincena declarada' },
    { icon: <NotDeclared size={10}/>, label: 'Quincena sin declarar' },
    { icon: <LateDeclared size={10}/>, label: 'Quincena declarada fuera de tiempo' },
    { icon: <Blocked size={10}/>, label: 'Quincena no disponible' },
    { icon: <DeclarationEnabled size={10}/>, label: 'Quincena en curso' },
    { icon: <Observed size={10}/>, label: 'Quincena con observación' },
];

export default function TableLegend() {
    return (
        <Paper variant="outlined" square={false} sx={{ mt: 2, p: 1, display: 'flex', alignItems: 'center'}}>
            {/* Itera sobre el array de datos de la leyenda */}
            {legendData.map((item, index) => (
                <Stack key={index} direction="row" spacing={1} sx={{ marginBottom: 1 }}>
                    {item.icon}
                    <Typography variant='body2' sx={{ width: 100}}>
                        {item.label}
                    </Typography>
                </Stack>
            ))}
        </Paper>
    );
};