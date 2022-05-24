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
  Button
} from "@mui/material";
import { Box } from "@mui/system";
import NavBarCreate from "../NewWorkout/NavBarCreate";

export default function Summary2() {
  const { day1, day2, title, cookies, setTitle, setValue, setDay1, setDay2, setChoice } = useContext(WorkoutContext);

  let navigate = useNavigate()

  const dayInfo1 = day1.workouts.workout.map((work) => {
    return (
      <WorkoutListItem
      key={work.id}
        type={work.bodyPart}
        name={work.name}
        image={work.gifUrl}
      />
    );
  });

  const dayInfo2 = day2.workouts.workout.map((work) => {
    return (
      <WorkoutListItem
      key={work.id}
        type={work.bodyPart}
        name={work.name}
        image={work.gifUrl}
      />
    );
  });

  const finalSubmit= () => {
    const options = {
      userId: Number(cookies.id),
      title: title,
      days: [day1, day2],
    };

    axios.post("http://localhost:8080/workouts/new/2", options).then((res) => {
      console.log(res)
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
      navigate('/')
    });
  }

  return (
		<>
			<NavBarCreate />
			<Box sx={{ minWidth: 120 }}>
				<Grid align='center' margin={1}>
					<header className='workout-header'>
						<h2>Summary of your workout "{title}"</h2>
					</header>
					<FormControl>
						<Grid container columnSpacing={1} rowSpacing={1}>
							<Grid item xs={12} sm={6} md={6}>
								<Typography variant='h6'>day 1</Typography>
								{dayInfo1}
							</Grid>
							<Grid item xs={12} sm={6} md={6}>
								<Typography variant='h6'>day 2</Typography>
								{dayInfo2}
							</Grid>
						</Grid>
						<Button variant='contained' onClick={() => finalSubmit()}>
							Submit
						</Button>
					</FormControl>
				</Grid>
			</Box>
		</>
	);
}
