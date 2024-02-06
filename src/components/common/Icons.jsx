import React from 'react';
/*import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import BlockIcon from '@mui/icons-material/Block';*/
import SquareIcon from '@mui/icons-material/Square';
import Paper from '@mui/material/Paper';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

// Nuevo componente de icono con color verde
export const Uploaded = () => (
    <Paper sx={{ bgcolor: 'green', width: 20, height: 20}}></Paper>
);

// Nuevo componente de icono con color rojo
export const NotUploaded = () => (
  <Paper sx={{ bgcolor: 'red', width: 20, height: 20}}></Paper>
);

export const CorrectionNeeded = () => (
    <Paper sx={{ bgcolor: 'orange', width: 20, height: 20}}></Paper>
  );

export const Blocked = () => (
    <Paper sx={{ bgcolor: 'lightslategray', width: 20, height: 20}}></Paper>
  );

export const ActionNeeded = () => (
    <Paper sx={{ bgcolor: 'white', width: 20, height: 20}}></Paper>
  );

  export const Observed = () => (
    <Paper sx={{ bgcolor: 'lightskyblue', width: 20, height: 20}}></Paper>
  );

export const ActiveDays = () => (
    <Paper sx={{ bgcolor: 'green', width: 15, height: 5}}></Paper>
);

export const InactiveDays = () => (
  <Paper sx={{ bgcolor: 'white', width: 15, height: 5}}></Paper>
);