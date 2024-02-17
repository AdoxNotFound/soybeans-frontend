import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ReportsIcon from '@mui/icons-material/Description';
import CorrectionsIcon from '@mui/icons-material/Report';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

export const UserTypes = ['administrador', 'industria', 'supervisor', 'gremio', 'control'];

export const UserItems = {
    administrador: ['Inicio', 'Usuarios', 'Configuraciones', 'Cerrar Sesión'],
    industria: ['Inicio', 'Reportes', 'Correcciones', 'Cerrar Sesión'],
    supervisor: ['Inicio', 'Reportes', 'Correcciones', 'Cerrar Sesión'],
    gremio: ['Inicio', 'Reportes', 'Cerrar Sesión'],
    control: ['Inicio', 'Reportes', 'Cerrar Sesión'],
  };
  
  export const UserIcons = {
    administrador: [<HomeIcon />, <PersonIcon />, <SettingsIcon />, <LogoutIcon />],
    industria: [<HomeIcon />, <ReportsIcon />, <CorrectionsIcon />, <LogoutIcon />],
    supervisor: [<HomeIcon />, <ReportsIcon />, <CorrectionsIcon />, <LogoutIcon />],
    gremio: [<HomeIcon />, <ReportsIcon />, <LogoutIcon />],
    control: [<HomeIcon />, <ReportsIcon />, <LogoutIcon />],
  };