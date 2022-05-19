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
          <Tab label="Day Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component={"span"} align="center">
              Body Part
            </Typography>
          </AccordionSummary>
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
                  <FormControl>
                    <strong>Please select one!</strong>
                    <Select
                      value={equipment}
                      labelId="Select equipment"
                      onChange={handleChanges}
                    >
                      <MenuItem value="">Empty</MenuItem>
                      <MenuItem value="barbell">Barbell</MenuItem>
                      <MenuItem value="band">Band</MenuItem>
                      <MenuItem value="body weight">Body Weight</MenuItem>
                      <MenuItem value="dumbbell">Dumbbell</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography component={"span"} align="center">
                    Chest
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <MuscleGroup muscle={'chest'} equipment={equipment}/>
                </AccordionDetails>
              </Accordion>
              <Divider />
              <ListItemText primary="Chest" />
              <Divider />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {" "}
                  <FormControl>
                    <strong>Please select one!</strong>
                    <Select
                      value={equipment}
                      labelId="another option"
                      onChange={handleChanges}
                    >
                      <MenuItem value="">Empty</MenuItem>
                      <MenuItem value="barbell">Barbell</MenuItem>
                      <MenuItem value="band">Band</MenuItem>
                      <MenuItem value="body weight">Body Weight</MenuItem>
                      <MenuItem value="dumbbell">Dumbbell</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography component={"span"} align="center">
                    Legs
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <List>{data}</List> */}
                  <MuscleGroup muscle={'upper legs'} equipment={equipment}/>
                </AccordionDetails>
              </Accordion>
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
