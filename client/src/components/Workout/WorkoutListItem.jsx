import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox";

export default function WorkoutListItem(props) {
	const reps = priority => {
		if (priority === 1) {
			return "4 sets of 8-10 reps";
		}
		if (priority === 2) {
			return "3 sets of 10-12 reps";
		}
		if (priority === 3) {
			return "2 sets of 12-15 reps";
		}
	};
const stringify = JSON.stringify(props)

	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'
			>
				
				<Typography>{props.name}</Typography>
				<Typography>{reps(props.priority)}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<img src={props.image} alt={`gif of ${props.name}`}></img>
			</AccordionDetails>
				<Checkbox value={stringify} onChange={e => props.handleClick(e)}/>
		</Accordion>
	);
}
