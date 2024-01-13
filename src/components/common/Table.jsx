import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Uploaded, NotUploaded, CorrectionNeeded, Blocked, ActionNeeded } from './Icons';

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
    <TableContainer component={Paper} sx={{maxWidth: 1000}}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
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
  );
}