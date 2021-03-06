import React from "react";
import { ListSubheader, List } from "@mui/material";
import WorkoutListItem from "./WorkoutListItem";

export default function WorkoutList(props) {
	const exerciseItem = props.group.map((item, index) => {
		return (
			<WorkoutListItem
				key={item.exercise_name}
				image={item.image}
				name={item.exercise_name}
				priority={item.priority}
			></WorkoutListItem>
		);
	});

	return (
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
					{props.name}
				</ListSubheader>
			}
		>
			{exerciseItem}
		</List>
	);
}
