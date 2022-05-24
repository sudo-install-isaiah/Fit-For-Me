import React from "react";
import { Grid } from "@mui/material";

export default function Title({ workoutName, currentDay }) {
	const message1 = currentDay
		? `Day ${currentDay} for workout`
		: "No workouts!";

	const message2 = workoutName ? `${workoutName}` : "Lets create one";
	return (
		<Grid align='center'>
			<header className='workout-header'>
				<h2>{message1}</h2>
				<h2 className='workout-name'>{message2}</h2>
			</header>
		</Grid>
	);
}
