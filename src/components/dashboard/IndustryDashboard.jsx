import {React, useEffect, useState} from 'react'
import BasicTable from './BasicTable';
import BasicBars from './Barchart';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DaysCounter from './DaysCounter';
import { Button } from '@mui/material';
import TableLegend from './TableLegend';
import Typography from '@mui/material/Typography';
import { useApiContext } from '../context/ApiContext';
import { handleReconection } from '../../helpers/handleReconection';
import YearSelector from '../common/YearSelector';

const IndustryDashboard = () => {

    const { generalSettings, industrySettings, updateIndustrySettings } = useApiContext();
    
    useEffect(() => {
        handleReconection(generalSettings.token, updateIndustrySettings); 
    }, []);

    return (
        <Grid container spacing={1} direction="column"> 
            {/* Primera fila */}
            <Grid item xs={12}>
                <Box sx={{ display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'}}>

                <Box sx={{ width: 200,
                         height: 210, 
                         display: 'flex', 
                         flexDirection: 'column',
                         rowGap: 3, m: 2, 
                         justifyContent: 'space-evenly',alignItems: 'center'
                          }}>
                    <Typography variant="h5">Resumen Anual</Typography>
                    <YearSelector yearList={industrySettings.availableYears}/>
                    <Button variant="outlined">Ver gestión</Button>
                </Box>
                <Box sx={{ height: 210, width: 800, display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <BasicTable />
                        <TableLegend />
                    </Box>
                    </Box>
            </Grid>
            {/* Segunda fila */}
            <Grid item xs={12}>
                <Box sx={{ display: 'flex', flexDirection: 'row',
                        alignItems: 'center', justifyContent: 'space-evenly'}}>

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