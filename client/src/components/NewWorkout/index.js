import { useContext, useEffect, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NavBarCreate from "./NavBarCreate";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { WorkoutContext } from "../providers/WorkoutFormProvider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TemplatePreview from "./TemplatePreview";
import "./index.css";
import NewWorkout from "./NewWorkout";
import OneDay from "../pickWorkouts/OneDay";
import TwoDay from "../pickWorkouts/TwoDay";
import ThreeDay from "../pickWorkouts/ThreeDay";

export default function NewWorkoutPage() {
	const [template, setTemplate] = useState("");
	const { title, setTitle, value, setValue } = useContext(WorkoutContext);

	const addTitle = e => {
		setTitle(e.target.value);
	};

	const chooseDay = e => {
		setValue(e.target.value);
	};

	const handleClick = value => {
		return setTemplate(value);
	};

	// useEffect(() => {
	// 	setTemplate(value);
	// }, []);

	return (
		<>
			<main>
				<NavBarCreate />

				{template === "" && (
					<NewWorkout
						title={title}
						chooseDay={chooseDay}
						addTitle={addTitle}
						value={value}
						handleClick={handleClick}
					></NewWorkout>
				)}

				<Container component='section' maxWidth='md'>
					<Box className='create-form days'>
						{template === "1" && <OneDay></OneDay>}
						{template === "2" && <TwoDay></TwoDay>}
						{template === "3" && <ThreeDay></ThreeDay>}
					</Box>
				</Container>
			</main>
		</>
	);
}
