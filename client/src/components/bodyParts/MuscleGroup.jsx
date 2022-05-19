import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import WorkoutListItem from "../Workout/WorkoutListItem";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { WorkoutContext } from "../providers/WorkoutFormProvider";


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
  const { exercise, setExercise, choice, setChoice } = useContext(WorkoutContext)
  // const [exercise, setExercise] = useState([]);
  // const [choice, setChoice] = useState({
  //   name: props.muscle,
  //   group: []
  // });
  const equipment = props.equipment;
  const bodyPart = props.muscle;

  // checks the target value to the exercise id and then logs the entire obj into the state
  const handleClick = (e) => {
    const test = exercise.filter((ex) => {
      if (ex.id === e.target.value) {
        //example of adding the user id to the object as well
        return ex;
      }
    });
    // returns array of objects
    const test1 = test[0]
    console.log(e.target.value);
    setChoice(prev => { return { ...prev, group: [...prev.group, test1]}} );
	};

  console.log("choice", choice.group);
  useEffect(() => {
    setExercise(example);
  }, []);
  // useEffect(() => {
  //     axios
  //       .get(`http://localhost:8080/api/${bodyPart}/${equipment}`)
  //       .then((res) => {
  //         setExercise(res.data);
  //       });
  //   }, [equipment]);


	const data = exercise.map((ex, index) => {
		const info = JSON.stringify(ex);
		return (
			<>
				<WorkoutListItem
					name={ex.name}
					image={ex.gifUrl}
					priority={1}
					type={ex.bodyPart}
				/>
				<Checkbox value={ex.id} onChange={e => handleClick(e)} />
			</>
		);
	});
	return <>{data}</>;
}
