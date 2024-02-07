import React from 'react';
import { ActiveDays, InactiveDays } from './Icons';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export default function DaysCounter() {
    return (
        <Paper sx={{mb: 2, p: 2, maxWidth: 200}}>
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
        </Paper>
    );
};