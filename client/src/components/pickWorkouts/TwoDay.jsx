import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Accordion, AccordionSummary, AccordionDetails, List, Divider, Card, CardContent, Button} from "@mui/material";
import { useState, useContext } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuscleGroup from "./MuscleGroup";
import { WorkoutContext } from "../providers/WorkoutFormProvider";
import { useNavigate } from 'react-router-dom'

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
  const [equipment, setEquipment] = useState("");
  const [selectedTab, setSelectedTab] = React.useState(0);
  const {
    setDay1,
    setDay2,
    choice,
    setChoice
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
			setSelectedTab(1);
		}
		if (selectedTab === 1) {
			setDay2({ day: 2, workouts: choice });
			setChoice({ day: 3, workout: [] });
			navigate("/new/2/summary");
		}
	};

  return (
		<>
			<Tabs
				value={selectedTab}
				onChange={handleChange}
				aria-label='basic tabs example'
			>
				<Tab label='Day One' />
				<Tab disabled={toggleTab} label='Day Two' />
			</Tabs>
			<TabPanel value={selectedTab} index={0}>
				<Card>
					<CardContent>
						<Typography>Muscle Group</Typography>
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
						<Typography>Body Parts</Typography>
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
						<Button variant='contained' onClick={toggleTabs}>
							Submit
						</Button>
					</CardContent>
				</Card>
			</TabPanel>
		</>
	);
}
