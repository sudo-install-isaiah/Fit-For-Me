import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { withCookies, Cookies } from "react-cookie";
import NewWorkout from "./NewWorkout";
import Button from '@mui/material/Button'

import Navbar from "./Navbar";

const foo = "barbell";
const x = "chest";
function App() {
	const [exercise, setExercise] = useState([]);
	useEffect(() => {
		// for demo purposes, hardcoded URL
		axios.get(`http://localhost:8080/workouts/day/current`).then(res => {
			// console.log(res);
			console.log(res.data);
			setExercise(res.data);
		});
	}, []);

	const test = exercise.map(data => {
		return `${data.name}\n ${data.bodyPart}\n ${data.gifUrl}\n`;
	});

	return (
		<div className='App'>
			<Navbar/>
			<h1>Fit for Me</h1>
			<Link to='/signup'>Signup</Link>
			<br />
			<Link to='/login'>Log in</Link>
			<br />
			<Link to='/new'>create new workout</Link>
			<ul>{test}</ul>
			<Outlet />
		</div>
	);
}

export default App;
