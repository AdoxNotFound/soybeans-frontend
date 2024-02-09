import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import Dataset from '../layout/DataExample';

export default function BasicBars({xAxisLabel, yAxisLabel, 
  seriesDataKey, seriesLabel}) {

  const valueFormatter = (value) => `${value} TM`; // Puedes modificar esto según tus necesidades

  return (
    <Box sx={{mx: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Paper variant="outlined" square={false}
            sx={{mb: 2, mx: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <BarChart
              dataset={Dataset}
              yAxis={[{ label: yAxisLabel }]}
              series={[{ dataKey: seriesDataKey, label: seriesLabel, valueFormatter, color: 'brown' }]}
              layout="vertical"
              xAxis={[{ scaleType: 'band', dataKey: xAxisLabel}]}
              width={600}
              height={300}
              tooltip={{ trigger: 'item' }}
            />
            {/* el trigger que mas estetico usando axis, sin embargo en el estado actual 
          del componente es mejor utilizar item, cuando se arregle, se cambiara*/}
        </Paper>
    </Box>
  );
}