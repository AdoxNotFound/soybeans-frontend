import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Dataset from '../layout/DataExample';
import Button from '@mui/material/Button';
import { BiweekelyStatusIcon } from './Icons';

const newStatusIcons = {
  "Declarada": <BiweekelyStatusIcon size={20} 
                    color={'green'}/>,
  "Sin Declarar": <BiweekelyStatusIcon size={20} 
                    color={'red'}/>,
  "Fuera de Tiempo": <BiweekelyStatusIcon size={20}
                   color={'orange'}/>,
  "No Disponible": <BiweekelyStatusIcon size={20} 
                   color={'lightslategray'}/>,
  "En Curso": <BiweekelyStatusIcon size={20} 
                    color={'white'}/>,
  "Observada": <BiweekelyStatusIcon size={20}
                    color={'lightskyblue'}/>
};

const renderTypographyIfNotNull = (field, text) => {
  if (field !== null && field !== undefined) {
    return (
      <Typography variant="body2">
        {`${text}: ${field} TM`}
      </Typography>
    );
  }
  return null;
};

const ModalContent = ({ data, onClose }) => (
  <Box sx={{ position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          bgcolor: 'background.paper', 
          p: 4,
          width: 300 }}>
    <Typography variant="body1" >
      {`Quincena ${data.quincena}, Mes ${data.mes}, Año ${data.gestion}`}
      </Typography>
    <Typography variant="body1">
      {`Estado: ${data.Estado}`}
      </Typography>
      {renderTypographyIfNotNull(data['Acopio_TM'], 'Acopio')}
      {renderTypographyIfNotNull(data['Grano_recibido_TM'], 'Grano Recibido')}
      {renderTypographyIfNotNull(data['HS_TM'], 'Harina de Soya')}
      {renderTypographyIfNotNull(data['CS_TM'], 'Cascarilla de Soya')}
      {renderTypographyIfNotNull(data['ACS_TM'], 'Aceite Crudo de Soya')}
      {renderTypographyIfNotNull(data['ARS_TM'], 'Aceite Refinado de Soya')}
    <Box sx={{display: 'flex',
          justifyContent:'center',
          mt: 2}}>  
    <Button variant='contained' onClick={onClose}>Cerrar</Button>
    </Box>
  </Box>
);

export default function BasicTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                   'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const getStatusIcon = (status, item) => (
    <div onClick={() => handleOpenModal(item)}>
      {newStatusIcons[status]}
    </div>
  );

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {months.map((month, index) => (
          <Box key={index} sx={{ display: 'flex', width: '55px',
              flexDirection: 'column', alignItems: 'center'
              }}>
            <Typography variant='h6'>{month}</Typography>
            <Box sx={{ display: 'flex', width: '55px',
              flexDirection: 'row', justifyContent: 'space-around'
              }}>
              {Dataset.map((item, dataIndex) => {
                  if (item.mes === index + 1) {
                    return getStatusIcon(item.Estado, item);
                  }
                  return null;
              })}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Modal para mostrar detalles del elemento */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ModalContent data={selectedItem} onClose={handleCloseModal} />
      </Modal>
    </div>
  );
}