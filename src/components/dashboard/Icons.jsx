import React from 'react';
import Paper from '@mui/material/Paper';

// Nuevo componente de icono con color verde
export const Declared = () => (
    <Paper sx={{ bgcolor: 'green', width: 20, height: 20}}></Paper>
);

// Nuevo componente de icono con color rojo
export const NotDeclared = () => (
  <Paper sx={{ bgcolor: 'red', width: 20, height: 20}}></Paper>
);

export const LateDeclared = () => (
    <Paper sx={{ bgcolor: 'orange', width: 20, height: 20}}></Paper>
  );

export const Blocked = () => (
    <Paper sx={{ bgcolor: 'lightslategray', width: 20, height: 20}}></Paper>
  );

export const DeclarationEnabled = () => (
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