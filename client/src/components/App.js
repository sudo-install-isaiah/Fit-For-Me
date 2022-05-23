import React from "react";
import "./App.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Workout from "./Workout";
import { UsersContext } from "./providers/UserProvider";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate } from "react-router-dom";
import { Button, } from "@mui/material";
import Title from "./Title";

function App() {
	const [workout, setWorkout] = useState([]);
	const [spinner, setSpinner] = useState(true);
	const { cookies, logout } = useContext(UsersContext);

	const workoutName = workout[0]?.name;
	const currentDay = workout[0]?.day;

	useEffect(() => {
		axios
			.get(`http://localhost:8080/workouts/days/current`, {
				params: { id: cookies.id },
			})
			.then(res => {
				setWorkout(res.data);
				setSpinner(false);
			});
	}, []);

	const handleClick = () => {
		const options = {
			isCurrent: false,
			userId: Number(cookies.id),
		};
		axios.put("http://localhost:8080/workouts/iscurrent", options).then(res => {
			return window.location.reload(true);
		});
	};

	return (
		<>
			{!cookies.id && <Navigate to='/login' replace={true} />}
			<div className='App'>
				<Navbar username={cookies.name} logout={logout}></Navbar>
				<br />
				{spinner === true && (
					<div style={{ marginTop: "20rem" }}>
						<CircularProgress sx={{ color: "#CCA43B" }} />
					</div>
				)}
				{spinner === false && (
					<>
						<Title workoutName={workoutName} currentDay={currentDay} />
						<Workout workout={workout} />
					</>
				)}
				{workout.length !== 0 && (
					<Button variant='contained' onClick={() => handleClick()}>
						Workout Complete
					</Button>
				)}
			</div>
		</>
	);
}

export default App;
