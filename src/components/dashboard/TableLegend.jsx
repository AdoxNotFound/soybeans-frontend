import React from 'react';
import { Declared, NotDeclared, LateDeclared, Blocked, DeclarationEnabled, Observed } from './Icons';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

// Define los datos de la leyenda como un array de objetos
const legendData = [
    { icon: <Declared />, label: 'Quincena declarada' },
    { icon: <NotDeclared />, label: 'Quincena sin declarar' },
    { icon: <LateDeclared />, label: 'Quincena declarada fuera de tiempo' },
    { icon: <Blocked />, label: 'Quincena no disponible' },
    { icon: <DeclarationEnabled />, label: 'Quincena en curso' },
    { icon: <Observed />, label: 'Quincena con observación' },
];

export default function TableLegend() {
    return (
        <Paper elevation={3} sx={{ mt: 2, p: 2, maxWidth: 300 }}>
            {/* Itera sobre el array de datos de la leyenda */}
            {legendData.map((item, index) => (
                <Stack key={index} direction="row" spacing={1} sx={{ marginBottom: 1 }}>
                    {item.icon}
                    <Typography variant='body2' component='body2'>
                        {item.label}
                    </Typography>
                </Stack>
            ))}
        </Paper>
    );
};