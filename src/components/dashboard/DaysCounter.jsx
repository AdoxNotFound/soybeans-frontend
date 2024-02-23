import React from 'react';
import { ActiveDays, InactiveDays } from './Icons';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function DaysCounter( {currentDate} ) {

    const navigate = useNavigate();

    function handleClick(event) {

        navigate('/industry');
      }

    return (
        <Paper variant="outlined" square={false} sx={{m: 2, p: 2, maxWidth: 200}}>
            <Box sx={{ display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'space-between',
                rowGap: 2}}>
                <Typography>
                    {currentDate}
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
                         sx={{ mb: 1 }}
                         onClick={handleClick}>Ingresar nuevo formulario</Button>
            </Box>
        </Paper>
    );
};