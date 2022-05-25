import React from "react";
import { useState } from "react";
import {
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	List,
	Divider,
	Tabs,
	Tab,
	Card,
	CardContent,
	Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuscleGroup from "./MuscleGroup";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import MuscleGroupParent from "./MuscleGroupParent";

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

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

export default function OneDay() {
	const [equipment, setEquipment] = useState("");
	const [tabValue, setTabValue] = React.useState(0);
	let navigate = useNavigate();

	const handleSubmit = () => {
		navigate("/new/1/summary");
	};

	const handleChange = (event, newValue) => {
		setTabValue(newValue);
	};

	return (
		<>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={tabValue}
					onChange={handleChange}
					aria-label='basic tabs example'
				>
					<Tab label='Day One' />
				</Tabs>
			</Box>
			<TabPanel value={tabValue} index={0}>
				<Card>
					<CardContent>
						<Typography>Muscle Groups</Typography>
						<AccordionDetails>
							<List>
								<Divider />
								<MuscleGroupParent
									muscle={"Chest"}
									equipiment={equipment}
								></MuscleGroupParent>
								<Divider />
								<MuscleGroupParent
									muscle={"Upper Legs"}
									equipiment={equipment}
								></MuscleGroupParent>

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
