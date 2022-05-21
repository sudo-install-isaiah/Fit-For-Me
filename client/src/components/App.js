import "./App.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Workout from "./Workout";
import { UsersContext } from "./providers/UserProvider";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import React from "react";

function App() {
	const [workout, setWorkout] = useState([]);
	const [spinner, setSpinner] = useState(true);
	const { cookies } = useContext(UsersContext);

	useEffect(() => {
		axios
			.get(`http://localhost:8080/workouts/days/current`, {
				params: { id: cookies.id },
			})
			.then(res => {
				console.log('res data', res.data);
				setWorkout(res.data);
				setSpinner(false);
			});
	}, [cookies]);

	console.log('workout', workout);

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
				{spinner === false &&<Workout workout={workout}></Workout>}
				{workout.length !== 0 && <Button variant="contained" onClick={handleClick}>Workout Complete</Button>}
			</div>
		</>
	);
}

export default App;
