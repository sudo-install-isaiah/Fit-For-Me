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

export default function Template1() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Day 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <List>
      <Divider />
      <ListItemText primary="Chest" />
      <Divider />
      <ListItemText primary="Chest" />
      <Divider />
      <ListItemText primary="Legs" />
      <Divider />
      <ListItemText primary="Legs" />
      <Divider />
      <ListItemText primary="Arms" />
      <Divider />
      <ListItemText primary="Arms" />
      <Divider />
      <ListItemText primary="Core" />
      <Divider />
    </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
