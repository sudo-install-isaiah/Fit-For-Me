import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const foo = "barbell";
const x = "chest"
function App() {
	const [exercise, setExercise] = useState([]);
	useEffect(() => {
		// for demo purposes, hardcoded URL
		axios.get(`http://localhost:8080/api/${x}/${foo}`).then(res => {
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
			<h1>Users</h1>
			<Link to='/signup'>Signup</Link>
			<br />
			<Link to='/login'>Log in</Link>
			<ul>{test}</ul>
			<Outlet />
		</div>
	);
}

export default App;
