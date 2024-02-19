import {React, useState} from 'react'
//import useToken from '../../services/useToken'
import BasicTable from './BasicTable';
import BasicBars from './Barchart';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DaysCounter from './DaysCounter';
import TableLegend from './TableLegend';
import Typography from '@mui/material/Typography';
import { useApiContext } from '../context/ApiContext';
import industryReconection from '../../services/IndustryService';

const IndustryDashboard = () => {
    //const {tokens, setTokens, clearTokens } = useToken(); 
    const { settings } = useApiContext();

    const fetchUserReconection = async () => {
        try {
          const response = await industryReconection(settings.token);
          // Verifica si la respuesta es válida y actualiza el contexto de la API
          if (response && response.data) {
          const optionNames = response.data.data.options.map(option => option.short_name);
  
          updateSettings({
            actualPeriod: {
              name: response.data.data.period.name,
              year: response.data.data.period.year,
              month: response.data.data.period.month,
              biweekly: response.data.data.period.biweekly,
              status: response.data.data.period.status
            },
            industryOptions: optionNames
          });
    
            console.log(optionNames)
          } else {
            console.error('La respuesta de userReconection no es válida.');
          }
        } catch (error) {
          console.error('Error al realizar la solicitud de userReconection:', error);
        }
      };
 
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
                    <DaysCounter />
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