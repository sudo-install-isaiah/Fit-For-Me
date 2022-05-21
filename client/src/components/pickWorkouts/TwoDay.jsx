import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
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
import MuscleGroup from "./MuscleGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { WorkoutContext } from "../providers/WorkoutFormProvider";
import { Button } from "@mui/material";
import {Link, useNavigate} from 'react-router-dom'
////testing can potentially delete everything here /////////////

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
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

export default function TwoDay() {
  const [exercise, setExercise] = useState([]);
  const [equipment, setEquipment] = useState("");
  const [selectedTab, setSelectedTab] = React.useState(0);
  const {
    cookies,
    setTitle,
    title,
    day1,
    setDay1,
    day2,
    setDay2,
    choice,
    setChoice,
    setValue,
  } = useContext(WorkoutContext);
  const [toggleTab, setToggleTab] = useState(true);
  let navigate = useNavigate()
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const toggleTabs = () => {
    if (selectedTab === 0) {
      setToggleTab(false);
      setDay1({ day: 1, workouts: choice });
      setChoice({ day: 2, workout: [] });
    }
    if (selectedTab === 1) {
      setDay2({ day: 2, workouts: choice });
      setChoice({ day: 3, workout: [] });
      navigate('/new/2/summary')
    }
  };


  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Day One" />
          <Tab disabled={toggleTab} label="Day Two" />
        </Tabs>
      </Box>
      <TabPanel value={selectedTab} index={0}>
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
                    <MuscleGroup muscle={"chest"} equipment={equipment} />
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
                    <MuscleGroup muscle={"shoulders"} equipment={equipment} />
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
                    <MuscleGroup muscle={"upper arms"} equipment={equipment} />
                  </AccordionDetails>
                </Accordion>
                <Divider />
              </List>
            </AccordionDetails>
            <Button variant="contained" onClick={toggleTabs}>
              Please Submit to Continue
            </Button>
          </CardContent>
        </Card>
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
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
                    <MuscleGroup muscle={"back"} equipment={equipment} />
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
                    <MuscleGroup muscle={"upper legs"} equipment={equipment} />
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
                    <MuscleGroup muscle={"waist"} equipment={equipment} />
                  </AccordionDetails>
                </Accordion>
                <Divider />
              </List>
            </AccordionDetails>
            <Button variant="contained" onClick={toggleTabs}>
              Press to me to Lock in Choices
            </Button>
          </CardContent>
        </Card>
      </TabPanel>
    </Box>
  );
}
