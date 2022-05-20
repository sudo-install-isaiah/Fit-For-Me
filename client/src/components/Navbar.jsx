import React from "react";
import {
	AddCircle,
	FitnessCenter,
	ArrowBackIosNew,
	ArrowForwardIos,
} from "@mui/icons-material/";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {

	return (
		<nav className='navbar'>
			<div className='container-fluid'>
				<div className='nav-item logo '>
					<FitnessCenter className='logo-icon'></FitnessCenter>
					<span>FitForMe</span>
				</div>
				<span className='nav-item'>
					<ArrowBackIosNew className='logo-icon'></ArrowBackIosNew>
					Current Day
					<ArrowForwardIos className='logo-icon'></ArrowForwardIos>
				</span>
				<div className='nav-item'>
					<Link to='/new'>
						<AddCircle className='logo-icon'></AddCircle>
					</Link>
				</div>
			</div>
		</nav>
	);
}
