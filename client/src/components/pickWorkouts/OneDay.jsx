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
import MuscleGroup from "./MuscleGroup";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import NavBarCreate from "../NewWorkout/NavBarCreate";

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

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function OneDay() {
	const { cookies, setTitle, title, setValue, value, choice, setDay1 } =
		useContext(WorkoutContext);
	const [exercise, setExercise] = useState([]);
	const [equipment, setEquipment] = useState("");
	const [tabValue, setTabValue] = React.useState(0);
	let navigate = useNavigate();

	const handleSubmit = () => {
		navigate("/new/1/summary");
	};

	const handleChange = (event, newValue) => {
		setTabValue(newValue);
	};

	console.log(choice);

	return (
		<>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={tabValue}
					onChange={handleChange}
					aria-label='basic tabs example'
				>
					<Tab label='Day One' {...a11yProps(0)} />
				</Tabs>
			</Box>
			<TabPanel value={tabValue} index={0}>
				<Card>
					<CardContent>
						<Typography>Muscle Groups</Typography>
						<AccordionDetails>
							<List>
								<Divider />
								<Accordion>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls='panel1a-content'
										id='panel1a-header'
									>
										{" "}
										<Typography component={"span"} align='center'>
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
										aria-controls='panel1a-content'
										id='panel1a-header'
									>
										{" "}
										<Typography component={"span"} align='center'>
											Legs
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<MuscleGroup muscle={"upper legs"} equipment={equipment} />
									</AccordionDetails>
								</Accordion>
								<Accordion>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls='panel1a-content'
										id='panel1a-header'
									>
										{" "}
										<Typography component={"span"} align='center'>
											Arms
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<MuscleGroup muscle={"upper arms"} equipment={equipment} />
									</AccordionDetails>
								</Accordion>
								<Divider />
								<Accordion>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls='panel1a-content'
										id='panel1a-header'
									>
										{" "}
										<Typography component={"span"} align='center'>
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
						<Button onClick={handleSubmit} variant='contained'>
							{" "}
							Submit
						</Button>
					</CardContent>
				</Card>
			</TabPanel>
		</>
	);
}
