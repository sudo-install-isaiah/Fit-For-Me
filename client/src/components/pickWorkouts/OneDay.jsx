import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function DayOne() {
  const [exercise, setExercise] = useState([]);
  
const foo = "barbell";
const x = "chest";
	useEffect(() => {
		// for demo purposes, hardcoded URL
		axios.get(`http://localhost:8080/api/exercise`).then(res => {
			// console.log(res);
			console.log(res.data);
			setExercise(res.data);
		});
	}, []);

  return (
<div>


</div>
  )
}


