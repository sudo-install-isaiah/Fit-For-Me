import "./App.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Workout from "./Workout";
import { UsersContext } from "./providers/UserProvider";
import CircularProgress from "@mui/material/CircularProgress";

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
				console.log(res.data);
				setWorkout(res.data);
				setSpinner(false);
			});
	}, [cookies]);

	return (
		<div className='App'>
			<Navbar></Navbar>
			<br />
			{spinner === true && (
				<div style={{ marginTop: "20rem" }}>
					<CircularProgress />
				</div>
			)}
			{spinner === false && <Workout workout={workout}></Workout>}
		</div>
	);
}

export default App;
