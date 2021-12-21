import React, {useContext} from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppContext } from "../Context/AppProvider";

export default function Navbar(){
  const {user: {username}, logout} = useContext(AppContext)
  const drawerWidth = 180
  return (
    <Box sx={{ display: 'flex'}} >
    <CssBaseline />
    {/* <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Welcome {username}!
        </Typography>
      </Toolbar>
    </AppBar> */}
    <Drawer
      variant="permanent"
      sx={{
        
        width: drawerWidth,
        flexShrink: 0,
        // [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      {/* <Toolbar /> */}
      <Box sx={{ overflow: 'auto'}}>
        <List>
          <ListItem button ><ListItemIcon><HomeIcon/></ListItemIcon><Link color="inherit" underline="none" component={RouterLink} to="/home">Home</Link></ListItem>
          <ListItem button ><ListItemIcon><CreateIcon/></ListItemIcon><Link color="inherit" underline="none" component={RouterLink} to="/threads">Threads</Link></ListItem>
          <ListItem button ><ListItemIcon><PersonIcon/></ListItemIcon><Link color="inherit" underline="none" component={RouterLink} to="/profile">Profile</Link></ListItem>
          <ListItem button onClick={logout}><ListItemIcon><LogoutIcon/></ListItemIcon>Logout</ListItem>
        </List>
      </Box>
    </Drawer>
    {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      
    </Box> */}
  </Box>
  )
}