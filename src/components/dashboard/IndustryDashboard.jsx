import {React, useState} from 'react'
import useToken from '../../app/useToken'
import Button from '@mui/material/Button';
import BasicTable from './BasicTable';
import BasicBars from './Barchart';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DaysCounter from './DaysCounter';
import TableLegend from './TableLegend';

const IndustryDashboard = () => {
    const {tokens, setTokens, clearTokens } = useToken(); 

  //boton de logout, se debe agregar a parte, mas adelate
 
    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={1}> {/* Utiliza Grid container para crear la estructura de dos columnas */}
                {/* Primera columna */}
                <Grid item xs={12} md={6}> {/* Esto ocupará 6 columnas de un total de 12, es decir, la mitad */}
                    <BasicBars        
                        yAxisLabel="(TM)"
                        xAxisLabel="Periodo"
                        seriesDataKey="Acopio_TM"
                        seriesLabel="Grano acopiado" />
                    <BasicBars 
                        yAxisLabel="(TM)"
                        xAxisLabel="Periodo"
                        seriesDataKey="Grano_recibido_TM"
                        seriesLabel="Grano recibido"/>
                </Grid>
                {/* Segunda columna */}
                <Grid item xs={12} md={6}> {/* Esto ocupará 6 columnas de un total de 12, es decir, la mitad */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <DaysCounter />
                        <BasicTable />
                        <TableLegend />
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
                            <Button variant="outlined" sx={{ mb: 1 }}>Ingresar nuevo formulario</Button>
                            <Button onClick={clearTokens}>Cerrar sesión</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default IndustryDashboard