import "./App.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Workout from "./Workout";
import { UsersContext } from "./providers/UserProvider";
import Empty from "./Empty";

function App() {
	const [workout, setWorkout] = useState([]);
	const { cookies } = useContext(UsersContext);
	useEffect(() => {
		axios
			.get(`http://localhost:8080/workouts/days/current`, {
				params: { id: cookies.id },
			})
			.then(res => {
				console.log(res.data);
				setWorkout(res.data);
			});
	}, [cookies]);

	return (
		<div className='App'>
			<Navbar></Navbar>
			<br />
			<main>
				{workout.length > 0 ? <Workout workout={workout}></Workout> : <Empty />}
			</main>
		</div>
	);
}

export default App;
