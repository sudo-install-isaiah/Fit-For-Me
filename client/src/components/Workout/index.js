import React from "react";
import WorkoutList from "./WorkoutList.jsx";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import "./index.css";
import Empty from "./Empty";

export default function Workout(props) {
	const exercises = props.workout;
	
	const groupedExercises = exercises.reduce((obj, exercise) => {
		if (!obj[exercise.type]) {
			return {
				...obj,
				[exercise.type]: [exercise],
			};
		} else {
			return {
				...obj,
				[exercise.type]: [...obj[exercise.type], exercise],
			};
		}
	}, {});
	
	const muscleGroups = Object.keys(groupedExercises).map((group, index) => {
		return (
			<WorkoutList key={index} name={group} group={groupedExercises[group]} />
			);
	});
	
		const isEmpty = (exercises, arr) => {
			if (exercises.length !== 0)
				return arr;
			return <Empty></Empty>
		}

	return (
		<Grid align='center'>
			{isEmpty(exercises, muscleGroups)}
		</Grid>
	);
}
