import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Accordion, AccordionSummary, AccordionDetails, List, Divider, Card, CardContent, Button } from "@mui/material";
import { useState, useContext } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuscleGroup from "./MuscleGroup";
import { WorkoutContext } from "../providers/WorkoutFormProvider";
import { useNavigate } from "react-router-dom";

// TODO extract this to helpers
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
				<Box className='exercise-select' sx={{ p: 3 }}>
					{children}
				</Box>
			)}
		</div>
	);
}

// TODO extract this to helpers
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function ThreeDay() {
	const [equipment, setEquipment] = useState("");
	const [selectedTab, setSelectedTab] = React.useState(0);
	const {
		setDay1,
		setDay2,
		setDay3,
		choice,
		setChoice,
	} = useContext(WorkoutContext);
	const [toggleTab, setToggleTab] = useState(true);
	let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

	const toggleTabs = () => {
		if (selectedTab === 0) {
			setToggleTab(false);
			setDay1({ day: 1, workouts: choice });
      setChoice({ day: 1, workout: [] });
      setSelectedTab(1);
		}
		if (selectedTab === 1) {
			setDay2({ day: 2, workouts: choice });
      setChoice({ day: 1, workout: [] });
      setSelectedTab(2);
		}
		if (selectedTab === 2) {
			setDay3({ day: 3, workouts: choice });
			setChoice({ day: 1, workout: [] });
			navigate("/new/3/summary");
		}
	};

	return (
		<>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={selectedTab}
					onChange={handleChange}
					aria-label='basic tabs example'
				>
					<Tab label='Day One' />
					<Tab disabled={toggleTab} label='Day Two' />
					<Tab disabled={toggleTab} label='Day Three' />
				</Tabs>
			</Box>
			<TabPanel value={selectedTab} index={0}>
				<Card>
					<CardContent>
						<Typography>Body Parts</Typography>
						<AccordionDetails>
							<List>
								<Divider />
								<Divider />
								<Divider />
							</List>
						</AccordionDetails>
						<Button variant='contained' onClick={toggleTabs}>
							Continue
						</Button>
					</CardContent>
				</Card>
			</TabPanel>
			<TabPanel value={selectedTab} index={1}>
				<Card>
					<CardContent>
						<Typography>Muscle Group</Typography>
						<AccordionDetails>
							<List>
								<Divider />
								
								<Divider />
								
								<Divider />
							</List>
						</AccordionDetails>
						<Button variant='contained' onClick={toggleTabs}>
							Continue
						</Button>
					</CardContent>
				</Card>
			</TabPanel>
			<TabPanel value={selectedTab} index={2}>
				<Card>
					<CardContent>
						<Typography>Body Parts</Typography>
						<AccordionDetails>
							<List>
								<Divider />
								
								<Divider />

								<Divider />
							</List>
						</AccordionDetails>
						<Button variant='contained' onClick={toggleTabs}>
							Submit
						</Button>
					</CardContent>
				</Card>
			</TabPanel>
		</>
	);
}
