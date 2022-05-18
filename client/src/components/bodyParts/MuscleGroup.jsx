import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import WorkoutListItem from "../Workout/WorkoutListItem";

export default function MuscleGroup(props) {
  const [exercise, setExercise] = useState([]);
  const equipment = props.equipment;
  const bodyPart = props.muscle

  console.log("props", props);
  console.log("equipment", equipment);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/${bodyPart}/${equipment}`).then((res) => {
      console.log(res.data);
      setExercise(res.data);
    });
  }, [equipment]);

  console.log("_____", exercise);

 

  const data = exercise.map((ex, index) => {
    return (
      <WorkoutListItem name={ex.name} image={ex.gifUrl} priority={1} />
      
    );
  });

  return <div>{data}</div>;
}
