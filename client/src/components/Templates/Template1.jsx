import * as React from 'react';
import Divider from "@mui/material/Divider"
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

export default function Template1() {
  return (
    <List
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
       Day 1
      </ListSubheader>
    }
  >
        <Divider/>
        <ListItemText primary="Chest" />
          <Divider/>
        <ListItemText primary="Chest" />
          <Divider/>
        <ListItemText primary="Legs" />
          <Divider/>
        <ListItemText primary="Legs" />
         <Divider/>
        <ListItemText primary="Arms" />
          <Divider/>
        <ListItemText primary="Arms" />
         <Divider/>
        <ListItemText primary="Core" />
         <Divider/>
    </List>
  )
}
  