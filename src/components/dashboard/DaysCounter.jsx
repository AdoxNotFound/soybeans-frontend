import React from 'react';
import { ActiveDays, InactiveDays } from './Icons';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function DaysCounter() {
    return (
        <Paper elevation={3} sx={{m: 2, p: 2, maxWidth: 200}}>
            <Box sx={{ display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'space-between',
                rowGap: 2}}>
                <Typography>
                    Fecha: 06/02/2024
                </Typography>
                <Typography sx={{color: 'green'}}>
                    5 dias restantes
                </Typography>
                <Stack direction="row" spacing={1}> 
                    <InactiveDays/>
                    <InactiveDays/>
                    <ActiveDays/>
                    <ActiveDays/>
                    <ActiveDays/>
                    <ActiveDays/>
                    <ActiveDays/>
                </Stack>
                <Button variant='contained'
                         sx={{ mb: 1 }}>Ingresar nuevo formulario</Button>
            </Box>
        </Paper>
    );
};