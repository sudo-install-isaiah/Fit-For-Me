import * as React from "react";
import Divider from "@mui/material/Divider";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Template1() {
  return (
    <Grid container>
        <List>
          <Typography>Day 1</Typography>
        <Divider/>
        <ListItemText primary="Chest" />
          <Divider/>
        <ListItemText primary="Chest" />
          <Divider/>
        <ListItemText primary="Chest" />
          <Divider/>
        <ListItemText primary="Shoulders" />
         <Divider/>
        <ListItemText primary="Shoulders" />
          <Divider/>
        <ListItemText primary="Shoulders" />
         <Divider/>
    </List>
    <Divider variant="middle"/>
        <List>
          <Typography>Day 2</Typography>
         <Divider/>
         <ListItemText primary="Back" />
           <Divider/>
         <ListItemText primary="Back" />
           <Divider/>
         <ListItemText primary="Back" />
           <Divider/>
         <ListItemText primary="Legs" />
          <Divider/>
         <ListItemText primary="Legs" />
           <Divider/>
         <ListItemText primary="Legs" />
          <Divider/>
     </List>
         <Divider variant='middle'/>
        <List>
          <Typography>Day 3</Typography>
           <Divider/>
         <ListItemText primary="Arms" />
           <Divider/>
         <ListItemText primary="Arms" />
           <Divider/>
         <ListItemText primary="Arms" />
           <Divider/>
         <ListItemText primary="Core" />
          <Divider/>
         <ListItemText primary="Core" />
           <Divider/>
         <ListItemText primary="Core" />
          <Divider/>
     </List>
    </Grid>
  );
}
