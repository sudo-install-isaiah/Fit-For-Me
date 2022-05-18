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

  // need name, bodypart, equipment, image,
  const foo = equipment;
  const x = "chest";
  useEffect(() => {
    // for demo purposes, hardcoded URL
    axios.get(`http://localhost:8080/api/chest/barbell`).then((res) => {
      console.log(res.data);
      setExercise(res.data);
    });
  }, []);
  console.log(equipment); ////////////

  const handleChanges = (event) => {
    setEquipment(event.target.value);
  };

  const data = exercise.map((ex) => {
    return (
      <Typography component={'span'} key={ex.id} id={ex.id}>
        {ex.bodyPart} - {ex.name} - {ex.equipment}
      </Typography>
    );
  });
  const [value, setValue] = React.useState(0);

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
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component={'span'} align="center">Body Part</Typography>
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
                  <Typography component={'span'} align="center">Chest</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>{data}</List>
                </AccordionDetails>
              </Accordion>
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
