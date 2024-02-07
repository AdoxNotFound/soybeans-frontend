import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function BasicBars({ title }) {
  return (
    <Box sx={{mx: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Paper elevation={3}
            sx={{mb: 2, mx: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Typography variant='body2' component='body2' sx={{mt: 2}}>
                {title}
            </Typography>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C', 'group D'] }]}
                series={[{ data: [4, 3, 5, 1] }, { data: [1, 6, 3, 5] }, { data: [2, 5, 6, 4] }, { data: [5, 4, 2, 2]}]}
                width={500}
                height={300}
                yAxis={[{ label: 'USD/TM'}]}
            />
        </Paper>
    </Box>
  );
}