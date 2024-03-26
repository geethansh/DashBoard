'use client'
import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';


export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" className=''>
          DASHBOARD
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Dashboard" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Analytics" />
            
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
          <ListItemText primary="Finance" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Job Board" />
            </ListItemButton>
          
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemText primary="Messages" />
      </ListItemButton>
      <ListItemButton >
        <ListItemText primary="Friends" />
        
      </ListItemButton>
      
      <ListItemButton>
        <ListItemText primary="Apps" />
      </ListItemButton>
    </List>
   
  );
}