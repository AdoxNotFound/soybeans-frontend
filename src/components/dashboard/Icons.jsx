import React from 'react';
import Paper from '@mui/material/Paper';

// Nuevo componente de icono con color verde
export const Declared = ({ size }) => (
    <Paper sx={{ bgcolor: 'green', width: size, height: size}}></Paper>
);

// Nuevo componente de icono con color rojo
export const NotDeclared = ({ size }) => (
  <Paper sx={{ bgcolor: 'red', width: size, height: size}}></Paper>
);

export const LateDeclared = ({ size }) => (
    <Paper sx={{ bgcolor: 'orange', width: size, height: size}}></Paper>
  );

export const Blocked = ({ size }) => (
    <Paper sx={{ bgcolor: 'lightslategray', width: size, height: size}}></Paper>
  );

export const DeclarationEnabled = ({ size }) => (
    <Paper sx={{ bgcolor: 'white', width: size, height: size}}></Paper>
  );

  export const Observed = ({ size }) => (
    <Paper sx={{ bgcolor: 'lightskyblue', width: size, height: size}}></Paper>
  );

export const ActiveDays = () => (
    <Paper sx={{ bgcolor: 'green', width: 15, height: 5}}></Paper>
);

export const InactiveDays = () => (
  <Paper sx={{ bgcolor: 'white', width: 15, height: 5}}></Paper>
);