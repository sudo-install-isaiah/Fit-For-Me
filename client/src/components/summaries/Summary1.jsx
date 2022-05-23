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
  Button
} from "@mui/material";
import { Box } from "@mui/system";

export default function Summary1() {
  const { title, value, choice, cookies, setTitle, setValue, setDay1, setChoice } = useContext(WorkoutContext);

  let navigate = useNavigate()

  const dayInfo1 = choice.workout.map((work) => {
    return (
      <WorkoutListItem
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

    axios.post("http://localhost:8080/workouts/new", options).then((res) => {
      console.log(res)
      setTitle("");
      setValue("");
      setDay1({});
      setChoice({
        day: 1,
        workout: [],
      });
      navigate('/')
    });

  };
  return (
    <>
    <NavBarCreate/>
    <Box sx={{ minWidth: 120 }}>
      <Grid align="center" margin={1}>
        <Typography variant="h2">{title}</Typography >
        <FormControl>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h6" >day 1</Typography>
              {dayInfo1}
            </Grid>
          </Grid>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </FormControl>
      </Grid>
    </Box>
    </>
  );
}
