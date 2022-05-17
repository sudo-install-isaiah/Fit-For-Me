import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import "./Navbar.css";

export default function Header(props) {
	return (
		<nav className='navbar'>
			<div className='container-fluid'>
				<div className='nav-item logo '>
					<FitnessCenterIcon className='logo-Icon'></FitnessCenterIcon>
					<span>FitForMe</span>
				</div>
				<span className='nav-item'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-caret-left'
						viewBox='0 0 16 16'
					>
						<path d='M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z' />
					</svg>
					Current Day
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						fill='currentColor'
						class='bi bi-caret-right'
						viewBox='0 0 16 16'
					>
						<path d='M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z' />
					</svg>
				</span>
				<span className='nav-item'>Create</span>
			</div>
		</nav>
	);
}
