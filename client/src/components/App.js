import "./App.css";
import { useState, useEffect,useContext } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Workout from "./Workout";
import { UsersContext } from "./providers/UserProvider";

function App() {
	const [state, setState] = useState([]);
	const {cookies} = useContext(UsersContext)
	useEffect(() => {
		
		axios.get(`http://localhost:8080/workouts/days/current`, { params: {id: cookies.id}}).then(res => {
			console.log(res.data);
			setState(res.data);
		});
	}, []);
	
	return (
		<div className='App'>
			<Navbar></Navbar>
			<br />
			<Workout workout={state}></Workout>
		</div>
	);
}

export default App;
