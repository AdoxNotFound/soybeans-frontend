import {React, useEffect, useState} from 'react'
import BasicTable from './BasicTable';
import BasicBars from './Barchart';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DaysCounter from './DaysCounter';
import TableLegend from './TableLegend';
import Typography from '@mui/material/Typography';
import { useApiContext } from '../context/ApiContext';
import { useIndustryContext } from '../context/IndustryContext';
import { handleReconection } from '../../helpers/handleReconection';

const IndustryDashboard = () => {

    const { settings } = useApiContext();
    const { industrySettings, updateIndustrySettings } = useIndustryContext();

    console.log(settings.token);
    
    useEffect(() => {
        handleReconection(settings.token, updateIndustrySettings); 
    }, [settings.token, updateIndustrySettings]);

    return (
        <Grid container spacing={1} direction="column"> 
            {/* Primera fila */}
            <Grid item xs={12}>
                <Box sx={{ display: 'flex', flexDirection: 'column',
                        alignItems: 'center', rowGap: 3, m: 2}}>
                    <Typography variant="h5">Resumen Anual</Typography>
                </Box>
            </Grid>
            {/* Segunda fila */}
            <Grid item xs={12}>
                <Box sx={{ display: 'flex', flexDirection: 'row',
                        alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <BasicTable />
                        <TableLegend />
                    </Box>
                    <DaysCounter currentDate={industrySettings.startDate} />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex', flexDirection: 'column',
                        alignItems: 'center', rowGap: 3, m: 2}}>
                    <Typography variant="h5">Resumenes granos</Typography>
                </Box>
            </Grid>
            {/* Tercera fila */}
            <Grid item xs={12}>
                <Box sx={{ display: 'flex', flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <BasicBars        
                        yAxisLabel="(TM)" xAxisLabel="Periodo"
                        seriesDataKey="Acopio_TM" seriesLabel="Grano acopiado" />
                    <BasicBars 
                        yAxisLabel="(TM)" xAxisLabel="Periodo"
                        seriesDataKey="Grano_recibido_TM" seriesLabel="Grano recibido"/>
                </Box>
            </Grid>
            {/* Cuarta fila */}
            <Grid item xs={12}>
                {/* Aquí puedes agregar tus otras gráficas */}
            </Grid>
        </Grid>
    )
}

export default IndustryDashboard