import React from "react";
import { WorkoutContext } from "../providers/WorkoutFormProvider";
import { useContext } from "react";
import WorkoutListItem from "../Workout/WorkoutListItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBarCreate from "../NewWorkout/NavBarCreate";
import {
	Typography,
	Grid,
	FormControl,
	Button,
	List,
	ListSubheader,
} from "@mui/material";
import { Box } from "@mui/system";

export default function Summary1() {
	const {
		title,
		value,
		choice,
		cookies,
		setTitle,
		setValue,
		setDay1,
		setChoice,
	} = useContext(WorkoutContext);

	let navigate = useNavigate();

	const dayInfo1 = choice.workout.map(work => {
		return (
			<WorkoutListItem
				key={work.id}
				type={work.bodyPart}
				name={work.name}
				image={work.gifUrl}
			/>
		);
	});

	const handleSubmit = () => {
		const options = {
			userId: Number(cookies.id),
			title: title,
			day: Number(value),
			workouts: choice.workout,
		};

		axios.post("http://localhost:8080/workouts/new", options).then(res => {
			console.log(res);
			setTitle("");
			setValue("");
			setDay1({});
			setChoice({
				day: 1,
				workout: [],
			});
			navigate("/");
		});
	};
	return (
		<>
			<NavBarCreate />
			<Box sx={{ minWidth: 120 }}>
				<Grid align='center' margin={1}>
					<header className='workout-header'>
						<h2>Summary of your workout</h2>
						<h2 className='workout-name'>{title}</h2>
					</header>
					<List
						sx={{ width: "100%", maxWidth: "700px", bgcolor: "inherit" }}
						component='section'
						aria-labelledby='nested-list-subheader'
						subheader={
							<ListSubheader
								className='exercise-header'
								component='div'
								id='nested-list-subheader'
							>
								Day 1
							</ListSubheader>
						}
					>
						{dayInfo1}
					</List>
					<Button variant='contained' onClick={() => handleSubmit()}>
						Submit
					</Button>
				</Grid>
			</Box>
		</>
	);
}
