import {React, useEffect, useState} from 'react'
import BasicBars from '../components/dashboard/Barchart';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DaysCounter from '../components/dashboard/DaysCounter';
import Typography from '@mui/material/Typography';
import { useApiContext } from '../components/context/ApiContext';
import { handleReconection } from '../helpers/handleReconection';
import IndustryAnualSumm from '../components/dashboard/IndustryAnualSumm';

const IndustryDashboard = () => {

  const { generalSettings, industrySettings, updateIndustrySettings } = useApiContext();
    
  useEffect(() => {
    handleReconection(generalSettings.token, updateIndustrySettings); 
  }, []);

  return (
    <Grid container spacing={1} direction="column"> 
      {/* Primera fila */}
      <Grid item xs={12} sx={{ mt: '50px',
    display: 'flex', flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-evenly'}}>
        <IndustryAnualSumm availableYears={industrySettings.availableYears} />
        <DaysCounter currentDate={industrySettings.startDate} />
      </Grid>
      {/* Segunda fila */}
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
          <BasicBars yAxisLabel="(TM)" xAxisLabel="Periodo"
                     seriesDataKey="Acopio_TM" seriesLabel="Grano acopiado" />
          <BasicBars yAxisLabel="(TM)" xAxisLabel="Periodo"
                     seriesDataKey="Grano_recibido_TM" seriesLabel="Grano recibido"/>
        </Box>
      </Grid>
    </Grid>
  )
}

export default IndustryDashboard