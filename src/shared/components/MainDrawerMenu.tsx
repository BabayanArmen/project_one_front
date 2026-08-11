import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import LogoutDialog from './LogoutDialog';
import { useState } from 'react';
import styles from "../styles/components/main-drawer-menu.module.scss";

export default function MainDrawerMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [openLogoutDialog, setOpenLogoutDialog] = useState<boolean>(false);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
            <ListItemButton>
              <NavLink to="/home" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
                <ListItemIcon>
                      <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary='Home' />
              </NavLink>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton>
              <NavLink to="/profile" className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
                <ListItemIcon>
                      <Person2Icon/>
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </NavLink>
            </ListItemButton>
        </ListItem>
      </List>
      <Divider />
        <ListItem disablePadding>
            <ListItemButton onClick={() => setOpenLogoutDialog(true)}>
              <ListItemIcon>
                    <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary='Logout' />
            </ListItemButton>
        </ListItem>
    </Box>
  );

  return (
    <div>
        <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
        </Drawer>
        <LogoutDialog open={openLogoutDialog} onClose={() => setOpenLogoutDialog(false)}/>
    </div>
  );
}
