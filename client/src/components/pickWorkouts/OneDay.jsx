import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Navbar from "../Navbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { ListItemText } from "@mui/material";
import { Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkoutList from "../Workout/WorkoutList";
import { WorkoutContext } from "../providers/WorkoutFormProvider";
import MuscleGroup from "../bodyParts/MuscleGroup";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

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

export default function OneDay() {
  const { cookies, title, value, exercise, setExercise, equipment, setEquipment, choice } = useContext(WorkoutContext);
  const [tabValue, setTabValue] = React.useState(0);

  // need name, bodypart, equipment, image,

  // useEffect(() => {
  //   // for demo purposes, hardcoded URL
  //   axios.get(`http://localhost:8080/api/chest/barbell`).then((res) => {
  //     console.log(res.data);
  //     setExercise(res.data);
  //   });
  // }, []);

  const handleChanges = (event) => {
    setEquipment(event.target.value);
    console.log('!!!!', title, value, cookies, choice);
  };
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const data = exercise.map((ex) => {
    return (
      <div key={ex.id} id={ex.id}>
        <p>
          {ex.bodyPart} - {ex.name} - {ex.equipment}
        </p>
      </div>
    );
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Day One" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={tabValue} index={0}>
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
                  <MuscleGroup muscle={"chest"} equipment={equipment} />
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
                  <MuscleGroup muscle={"upper legs"} equipment={equipment} />
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
    </Box>
  );
}
