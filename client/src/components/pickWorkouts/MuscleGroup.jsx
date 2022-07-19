import React from "react";
import {
	Accordion,
	AccordionSummary,
	Typography,
	AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuscleItem from "./MuscleItem";

export default function MuscleGroup({ muscle, equipment }) {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'
			>
				{" "}
				<Typography component={"span"} align='center'>
					{muscle}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<MuscleItem muscle={muscle} equipment={equipment} />
			</AccordionDetails>
		</Accordion>
	);
}
