import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useApiContext } from '../context/ApiContext';
import LogoutHandler from '../../helpers/LogoutHandler';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import useToken from '../../services/useToken';
import ToggleThemeButton from './ToggleThemeButton';
import { UserItems, UserIcons } from '../../helpers/UserTypes';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function PersistentDrawerLeft({ SelectedPage }) {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { generalSettings } = useApiContext();
  const {tokens, clearTokens } = useToken(); 
  const navigate = useNavigate(); // Obtiene la función navigate
  const handleLogout = LogoutHandler( tokens,  clearTokens, navigate);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open} color='transparent' elevation={0} >
        <Toolbar>
        {!open && ( // Ajuste de posición del icono de menú
            <Box sx={{ width: '50px' }} />
          )}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }} >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Typography sx={{marginRight: 1}}>{generalSettings.username}</Typography>
          <Avatar alt='industry logo' src='src/assets/iol_logo.jpeg'/>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader>
          <img src='/green_logo.svg' alt='RIQS logo' width={40}/>
          {open && ( // Mostrar imagen del logo y ocultar el Typography
            <React.Fragment>
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            RIQS
          </Typography>
          <IconButton onClick={handleDrawerClose} sx={{ color: 'inherit' }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
            </React.Fragment>
          )}
        </DrawerHeader>
        <Divider />
        <List>
          {UserItems[generalSettings.role].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block'}}>
              <ListItemButton onClick={() => {
                if (text === 'Cerrar Sesión') {
                  handleLogout();
                } else {
                  console.log('Navegando a:');
                }
              }} sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}>
                <ListItemIcon sx={{ color: 'inherit', minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center', }}>
                  {UserIcons[generalSettings.role][index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <ToggleThemeButton/>
      </Drawer>
    <DrawerHeader />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {SelectedPage}
      </Box>
    </Box>
  );
}