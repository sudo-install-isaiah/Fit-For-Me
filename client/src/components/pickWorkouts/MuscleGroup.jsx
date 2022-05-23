import React, { useContext } from "react";
import axios from "axios"; //keep
import { useEffect, useState } from "react";
import WorkoutListItem from "../Workout/WorkoutListItem";
import {InputLabel, MenuItem, FormControl, Select, Checkbox} from "@mui/material";
import { WorkoutContext } from "../providers/WorkoutFormProvider";

// can be deleted hardcoded for testing purposes
const example = [
	{
		bodyPart: "upper legs",
		equipment: "dumbbell",
		gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0291.gif",
		id: "0291",
		name: "dumbbell bench squat",
		target: "glutes",
	},
	{
		bodyPart: "upper legs",
		equipment: "dumbbell",
		gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0295.gif",
		id: "0295",
		name: "dumbbell clean",
		target: "glutes",
	},
	{
		bodyPart: "upper legs",
		equipment: "dumbbell",
		gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3635.gif",
		id: "3635",
		name: "dumbbell contralateral forward lunge",
		target: "glutes",
	},
	{
		bodyPart: "upper legs",
		equipment: "dumbbell",
		gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0300.gif",
		id: "0300",
		name: "dumbbell deadlift",
		target: "glutes",
	},
	{
		bodyPart: "upper legs",
		equipment: "dumbbell",
		gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1760.gif",
		id: "1760",
		name: "dumbbell goblet squat",
		target: "quads",
	},
	{
		bodyPart: "upper legs",
		equipment: "dumbbell",
		gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0336.gif",
		id: "0336",
		name: "dumbbell lunge",
		target: "glutes",
	},
	{
		bodyPart: "upper legs",
		equipment: "dumbbell",
		gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0339.gif",
		id: "0339",
		name: "dumbbell lying femoral",
		target: "hamstrings",
	},
	{
		bodyPart: "upper legs",
		equipment: "dumbbell",
		gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3888.gif",
		id: "3888",
		name: "dumbbell one arm snatch",
		target: "glutes",
	},
	{
		bodyPart: "upper legs",
		equipment: "dumbbell",
		gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0371.gif",
		id: "0371",
		name: "dumbbell plyo squat",
		target: "glutes",
	},
	{
		bodyPart: "upper legs",
		equipment: "dumbbell",
		gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0381.gif",
		id: "0381",
		name: "dumbbell rear lunge",
		target: "glutes",
	},
];

export default function MuscleGroup(props) {
	const { exercise, setExercise, setChoice } =
		useContext(WorkoutContext);
	const [equipment, setEquipment] = useState("");
	const bodyPart = props.muscle // keep
	
	// checks the target value to the exercise id and then logs the entire obj into the state
	const handleClick = e => {
		const test = exercise.filter(ex => {
			if (ex.id === e.target.value) {
				//example of adding the user id to the object as well
				return ex;
			}
		});
		// returns array of objects
		const test1 = test[0];
		setChoice(prev => {
			return { ...prev, workout: [...prev.workout, test1] };
		});
	};

	const handleChanges = event => {
		setEquipment(event.target.value);
	};
	
// for testing purposes
	useEffect(() => {
		setExercise(example);
	}, []);

// real data from api
	// useEffect(() => {
	//     axios
	//       .get(`http://localhost:8080/api/${bodyPart}/${equipment}`)
	//       .then((res) => {
	//         setExercise(res.data);
	//       });
	//   }, [equipment]);

	const data = exercise.map((ex, index) => {
		return (
			<>
				<WorkoutListItem
					key={index}
					name={ex.name}
					image={ex.gifUrl}
					priority={1}
					type={ex.bodyPart}
				/>
				<Checkbox value={ex.id} onChange={e => handleClick(e)} />
			</>
		);
	});

	return (
		<>
			<FormControl className='equipment-form' sx={{ m: 1, minWidth: 120 }}>
				{/* <Typography></Typography> */}
				<InputLabel className='equipment-form' id='select-equipment-label'>
					Equipment
				</InputLabel>
				<Select
					style={{ backgroundColor: "rgb(204 164 58 / 55%)" }}
					variant='filled'
					id='equipment'
					label='equipment'
					value={equipment}
					labelId='select-equipment-label'
					onChange={handleChanges}
					disableUnderline
				>
					<MenuItem value='barbell'>Barbell</MenuItem>
					<MenuItem value='band'>Band</MenuItem>
					<MenuItem value='body weight'>Body Weight</MenuItem>
					<MenuItem value='dumbbell'>Dumbbell</MenuItem>
				</Select>
			</FormControl>
			{data}
		</>
	);
}
