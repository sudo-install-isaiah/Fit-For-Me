import "./App.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Workout from "./Workout";
import { UsersContext } from "./providers/UserProvider";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import React from "react";

function App() {
	const [workout, setWorkout] = useState([]);
	const [spinner, setSpinner] = useState(true);
	const { cookies, currentUser, logout } = useContext(UsersContext);
	const title = workout.map(item => item.name)
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
		axios.put('http://localhost:8080/workouts/iscurrent', options)
			.then(res => {
			});
			window.location.reload(true)
	};
	return (
		<>
			{!cookies.id && <Navigate to='/login' replace={true} />}
			<div className='App'>
				<Navbar></Navbar>
				<br />
				{spinner === true && (
					<div style={{ marginTop: "20rem" }}>
						<CircularProgress sx={{ color: "#CCA43B" }} />
					</div>
				)}
				{spinner === false &&<> <Typography variant="h2">{title[0]}</Typography><Workout workout={workout}></Workout></>}
				{workout.length !== 0 && <Button variant="contained" onClick={handleClick}>Workout Complete</Button>}
			</div>
		</>
	);
}

export default App;
