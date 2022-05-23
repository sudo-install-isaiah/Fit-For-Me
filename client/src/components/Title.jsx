import React from "react";
import { Grid } from "@mui/material";

export default function Title({ workoutName, currentDay }) {
	const message =
		workoutName && currentDay
			? `Day ${currentDay} for workout "${workoutName}"`
			: "No workouts! Lets create one";

	return (
		<Grid align='center'>
			<header className='workout-header'>
				<h2>{message}</h2>
			</header>
		</Grid>
	);
}
