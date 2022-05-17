import * as React from 'react';
import Divider from "@mui/material/Divider"
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid'

export default function Template2() {
  return (
    <>
<Grid>
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
        <ListItemText primary="Shoulders" />
          <Divider/>
        <ListItemText primary="Shoulders" />
         <Divider/>
        <ListItemText primary="Arms" />
          <Divider/>
        <ListItemText primary="Arms" />
         <Divider/>
    </List>
    </Grid>
    <Grid>
     <List
     sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
     component="nav"
     aria-labelledby="nested-list-subheader"
     subheader={
       <ListSubheader component="div" id="nested-list-subheader">
        Day 2
       </ListSubheader>
     }
   >
         <Divider/>
         <ListItemText primary="Back" />
           <Divider/>
         <ListItemText primary="Back" />
           <Divider/>
         <ListItemText primary="Legs" />
           <Divider/>
         <ListItemText primary="Legs" />
          <Divider/>
         <ListItemText primary="Core" />
           <Divider/>
         <ListItemText primary="Core" />
          <Divider/>
     </List>
     </Grid>
     </>
  )
}
  