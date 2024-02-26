import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import ButtonUpload from './ButtonUpload';
import strings from '../../helpers/strings';

export default function IndustryFormTable() {
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      const label = { inputProps: { 'aria-label': 'Switch demo' } };

      const rows = [
        createData(1, strings.acopioFormTitle, <ButtonUpload/>, <Switch {...label} defaultChecked />, strings.pendingFormMessage),
        createData(2, strings.priceClosingFormTitle, <ButtonUpload/>, <Switch {...label} defaultChecked />, strings.uploadedFormMessage),
        createData(3, strings.hssFormTitle, <ButtonUpload/>, <Switch {...label} defaultChecked />, strings.dateErrorFormMessage),
        createData(4, strings.hisFormTitle, <ButtonUpload/>, <Switch {...label} defaultChecked />, strings.meanErrorFormMessage),
        createData(5, strings.expFormTitle, <ButtonUpload/>, <Switch {...label} defaultChecked />, strings.pendingFormMessage),
        createData(6, strings.csFormTitle, <ButtonUpload/>, <Switch {...label} defaultChecked />, strings.uploadedFormMessage),
        createData(7, strings.acsFormTitle, <ButtonUpload/>, <Switch {...label} defaultChecked />, strings.dateErrorFormMessage),
        createData(8, strings.arsFormTitle, <ButtonUpload/>, <Switch {...label} defaultChecked />, strings.meanErrorFormMessage),
        createData(9, strings.productionFormTitle, <ButtonUpload/>, <Switch {...label} defaultChecked />, strings.pendingFormMessage),
        createData(10, strings.stockFormTitle, <ButtonUpload/>, <Switch {...label} defaultChecked />, strings.uploadedFormMessage),
      ];

    return(
        <TableContainer component={Paper} sx={{ width: '100%', maxWidth: 1000 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Número</TableCell>
              <TableCell>Formulario</TableCell>
              <TableCell align="right">Acción</TableCell>
              <TableCell align="right">Sin Movimiento</TableCell>
              <TableCell align="right">Descripción</TableCell>
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
                <TableCell>{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
