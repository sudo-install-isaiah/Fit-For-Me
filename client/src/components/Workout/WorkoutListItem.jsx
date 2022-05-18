import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function WorkoutListItem(props) {

	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'
			>
				<Typography>{props.name}</Typography>
			</AccordionSummary>
			<AccordionDetails>
        <img src={props.image} alt={`gif of ${props.name}`}></img>
			</AccordionDetails>
		</Accordion>
	);
}
