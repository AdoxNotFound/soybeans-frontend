import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { Uploaded, NotUploaded, CorrectionNeeded, Blocked, ActionNeeded, ActiveDays, InactiveDays, Observed } from './Icons';
import { Typography } from '@mui/material';

function createData(name, ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic) {
  return { name, ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic};
}

const rows = [
  createData(1, <Uploaded/>, <NotUploaded/>, <Uploaded/>, <Uploaded/>,
  <Uploaded/>, <NotUploaded/>, <Uploaded/>, <Uploaded/>,
  <ActionNeeded/>, <Blocked/>, <Blocked/>, <Blocked/>),
  createData(2, <Uploaded/>, <Uploaded/>, <CorrectionNeeded/>, <Uploaded/>,
  <Uploaded/>, <Uploaded/>, <CorrectionNeeded/>, <Uploaded/>,
  <Blocked/>, <Blocked/>, <Blocked/>, <Blocked/>),
];

export default function BasicTable() {
  return (
    <div>
    {/* Contador de días */}
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

    <TableContainer component={Paper} elevation={3} sx={{width: '100%', maxWidth: 750}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Quincena</TableCell>
            <TableCell align="right">Ene</TableCell>
            <TableCell align="right">Feb</TableCell>
            <TableCell align="right">Mar</TableCell>
            <TableCell align="right">Abr</TableCell>
            <TableCell align="right">May</TableCell>
            <TableCell align="right">Jun</TableCell>
            <TableCell align="right">Jul</TableCell>
            <TableCell align="right">Ago</TableCell>
            <TableCell align="right">Sep</TableCell>
            <TableCell align="right">Oct</TableCell>
            <TableCell align="right">Nov</TableCell>
            <TableCell align="right">Dic</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.ene}</TableCell>
              <TableCell align="right">{row.feb}</TableCell>
              <TableCell align="right">{row.mar}</TableCell>
              <TableCell align="right">{row.abr}</TableCell>
              <TableCell align="right">{row.may}</TableCell>
              <TableCell align="right">{row.jun}</TableCell>
              <TableCell align="right">{row.jul}</TableCell>
              <TableCell align="right">{row.ago}</TableCell>
              <TableCell align="right">{row.sep}</TableCell>
              <TableCell align="right">{row.oct}</TableCell>
              <TableCell align="right">{row.nov}</TableCell>
              <TableCell align="right">{row.dic}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <Paper elevation={3} sx={{mt: 2, p: 2,  maxWidth: 300}}>
      <Stack direction="row" spacing={1}>
        <Uploaded/>
      <Typography variant='body2' component='body2'>
      Quincena declarada
    </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <NotUploaded/>
      <Typography variant='body2' component='body2'>
      Quincena no declarada
    </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <CorrectionNeeded/>
      <Typography variant='body2' component='body2'>
      Quincena declarada fuera de tiempo
    </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Blocked/>
      <Typography variant='body2' component='body2'>
      Quincena no disponible
    </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <ActionNeeded/>
      <Typography variant='body2' component='body2'>
      Quincena vigente
    </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Observed/>
      <Typography variant='body2' component='body2'>
      Quincena con observación
    </Typography>
      </Stack>
      
    </Paper>

    </div>
  );
}