import React from "react";
import WorkoutList from "./WorkoutList.jsx";
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
			<WorkoutList key={group} name={group} group={groupedExercises[group]} />
		);
	});

	const isEmpty = (exercises, arr) => {
		if (exercises.length !== 0) return arr;
		return <Empty></Empty>;
	};

	const display = isEmpty(exercises, muscleGroups);

	return <Grid align='center'>{display}</Grid>;
}
