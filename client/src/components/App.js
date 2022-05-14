import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./user/Login";
import Signup from "./user/Signup";
import Frequency from "./Frequency";
import Header from "./Header";

function App() {
	useEffect(() => {
		// for demo purposes, hardcoded URL
		axios.get("http://localhost:3000/users").then(res => {
			console.log(res);
		});
	}, []);

	return (
		<div className='App'>
			<h1>Users</h1>
			{/* <Login/> */}
			{/* <Signup/> */}
			{/* <Frequency/> */}
			<Header/>
		</div>
	);
}

export default App;
