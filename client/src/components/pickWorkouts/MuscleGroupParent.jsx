import React from "react";
import {
	Accordion,
	AccordionSummary,
	Typography,
	AccordionDetails,
} from "@mui/material";
import MuscleGroup from "./MuscleGroup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MuscleGroupParent({ muscle, equipment }) {
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
				<MuscleGroup muscle={muscle} equipment={equipment} />
			</AccordionDetails>
		</Accordion>
	);
}
