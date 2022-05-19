import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Navbar from "../Navbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import { ListItemText } from "@mui/material";
import { Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuscleGroup from "../bodyParts/MuscleGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
////testing can potentially delete everything here /////////////

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TwoDay() {
  const [exercise, setExercise] = useState([]);
  const [equipment, setEquipment] = useState("");
  const [value, setValue] = React.useState(0);

  console.log('is this the one', equipment);

  const handleChanges = (event) => {
    setEquipment(event.target.value);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Day One" {...a11yProps(0)} />
          <Tab label="Day Two" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Card>
         <CardContent>
           <Typography>Body Parts</Typography>
          <AccordionDetails>
            <List>
              <Divider />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {" "}
                  <Typography component={"span"} align="center">
                    Chest
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MuscleGroup muscle={'chest'} equipment={equipment}/>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {" "}
                  <Typography component={"span"} align="center">
                    Shoulders
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MuscleGroup muscle={'shoulders'} equipment={equipment}/>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {" "}
                  <Typography component={"span"} align="center">
                    Arms
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MuscleGroup muscle={'upper arms'} equipment={equipment}/>
                </AccordionDetails>
              </Accordion>
              <Divider />
            </List>
          </AccordionDetails>
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Card>
         <CardContent>
           <Typography>Body Parts</Typography>
          <AccordionDetails>
            <List>
              <Divider />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {" "}
                  <Typography component={"span"} align="center">
                    Back
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MuscleGroup muscle={'back'} equipment={equipment}/>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {" "}
                  <Typography component={"span"} align="center">
                    Legs
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MuscleGroup muscle={'upper legs'} equipment={equipment}/>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {" "}
                  <Typography component={"span"} align="center">
                    Core
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MuscleGroup muscle={'waist'} equipment={equipment}/>
                </AccordionDetails>
              </Accordion>
              <Divider />
            </List>
          </AccordionDetails>
          </CardContent>
        </Card>
      </TabPanel>
    </Box>
  );
}
