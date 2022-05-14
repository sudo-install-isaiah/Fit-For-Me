import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import { Routes, Route, Link, Outlet } from 'react-router-dom'

function App() {
	useEffect(() => {
		// for demo purposes, hardcoded URL
		axios.get("http://localhost:8080/users").then(res => {
			console.log(res);
		});
	}, []);

	return (
		<div className='App'>
			<h1>Users</h1>
			<Link to='/signup'>Signup</Link><br/>
			<Link to='/login'>Log in</Link>
			<Outlet/>
			{/* <Login/> */}
			{/* <Signup/> */}
		</div>
	);
}

export default App;
