import React from "react";
import { WorkoutContext } from "../providers/WorkoutFormProvider";
import { useContext } from "react";
import WorkoutListItem from "../Workout/WorkoutListItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
	Typography,
	Grid,
	FormControl,
	Button,
	List,
	ListSubheader,
} from "@mui/material";
import { Box } from "@mui/system";
import NavBarCreate from "../NewWorkout/NavBarCreate";

export default function Summary2() {
	const {
		day1,
		day2,
		title,
		cookies,
		setTitle,
		setValue,
		setDay1,
		setDay2,
		setChoice,
	} = useContext(WorkoutContext);

	let navigate = useNavigate();

	const dayInfo1 = day1.workouts.workout.map(work => {
		return (
			<WorkoutListItem
				key={work.id}
				type={work.bodyPart}
				name={work.name}
				image={work.gifUrl}
			/>
		);
	});

	const dayInfo2 = day2.workouts.workout.map(work => {
		return (
			<WorkoutListItem
				key={work.id}
				type={work.bodyPart}
				name={work.name}
				image={work.gifUrl}
			/>
		);
	});

	const finalSubmit = () => {
		const options = {
			userId: Number(cookies.id),
			title: title,
			days: [day1, day2],
		};

		axios.post("http://localhost:8080/workouts/new/2", options).then(res => {
			console.log(res);
			setTitle("");
			setValue("");
			setChoice({
				day: 1,
				workout: [],
			});
			setDay1({
				day: 1,
				workout: [],
			});
			setDay2({
				day: 2,
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
									Day 2
								</ListSubheader>
							}
						>
							{dayInfo2}
						</List>
						<Button variant='contained' onClick={() => finalSubmit()}>
							Submit
						</Button>
			
				</Grid>
			</Box>
		</>
	);
}
