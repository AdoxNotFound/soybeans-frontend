import React from 'react';
/*import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import BlockIcon from '@mui/icons-material/Block';*/
import SquareIcon from '@mui/icons-material/Square';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

// Nuevo componente de icono con color verde
export const Uploaded = () => (
  <SquareIcon sx={{ color: 'green' }} />
);

// Nuevo componente de icono con color rojo
export const NotUploaded = () => (
  <SquareIcon sx={{ color: 'red' }} />
);

export const CorrectionNeeded = () => (
    <SquareIcon sx={{ color: 'gold' }} />
  );

export const Blocked = () => (
    <SquareIcon sx={{ color: 'lightgray' }} />
  );

export const ActionNeeded = () => (
    <CheckBoxOutlineBlankIcon sx={{ color: 'black' }} />
  );
