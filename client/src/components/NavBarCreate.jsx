import React from "react";
import {

	FitnessCenter,
	ArrowBackIosNew,
} from "@mui/icons-material/";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function NavBarCreate(props) {
	return (
		<nav className='navbar'>
			<div className='container-fluid'>
        <span className='nav-item'>
          <Link to="/">
					<ArrowBackIosNew className='logo-icon'></ArrowBackIosNew>
          </Link>
        </span>
        <h1 className="nav-item logo">Create Workout</h1>
				<div className='nav-item logo '>
					<FitnessCenter className='logo-icon'></FitnessCenter>
					<span>FitForMe</span>
				</div>
        
			</div>
		</nav>
	);
}
