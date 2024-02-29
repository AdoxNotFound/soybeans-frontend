import {React, useEffect, useState} from 'react'
import BasicTable from './BasicTable';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import TableLegend from './TableLegend';
import Typography from '@mui/material/Typography';
import YearSelector from '../common/YearSelector';

const IndustryAnualSumm = ( {availableYears} ) => {

  return(
    <Paper variant='outlined' sx={{ width: '800px', display: 'flex',
             flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center' }}>
      <Box sx={{ width: '750px', display: 'flex', 
                flexDirection: 'row',
                rowGap: 3, m: 2, 
                justifyContent: 'space-between',
                alignItems: 'center' }}>
        <Typography variant="h3"  color="primary">Resumen Anual</Typography>
        <YearSelector yearList={ availableYears }/>
        <Button variant="outlined" size='small'>Ver gestión</Button>
      </Box>
        <BasicTable />
        <TableLegend />
      
    </Paper>
  )
}

export default IndustryAnualSumm;