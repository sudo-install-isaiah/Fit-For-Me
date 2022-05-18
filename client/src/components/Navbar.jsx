import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";

export default function Navbar(props) {
	return (
		<nav className='navbar'>
			<div className='container-fluid'>
				<div className='nav-item logo '>
					<FitnessCenterIcon className='logo-Icon'></FitnessCenterIcon>
					<span>FitForMe</span>
				</div>
				<span className='nav-item'>
					<ArrowBackIosNewIcon className='logo-icon'></ArrowBackIosNewIcon>
					Current Day
					<ArrowForwardIosIcon className='logo-icon'></ArrowForwardIosIcon>
				</span>
				<div className='nav-item'>
					<Link to='/new'>
						<AddCircleIcon className='logo-icon'></AddCircleIcon>
					</Link>
				</div>
			</div>
		</nav>
	);
}
