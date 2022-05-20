import { useContext, useEffect, useState } from "react";
import Template1 from "./Template1";
import Template2 from "./Template 2";
import Template3 from "./Template3";
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
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import "./index.css";
// link to at the bottom needs changed for how many days are choosen
export default function NewWorkout() {
	const [auth1, setAuth1] = useState(false);
	const [auth2, setAuth2] = useState(false);
	const [auth3, setAuth3] = useState(false);
	// const [value, setValue] = useState("");
	// const [title, setTitle] = useState("");
	const [exercise, setExercise] = useState([]);
	const [test, setTest] = useState([]);
	const { cookies, title, setTitle, value, setValue } =
		useContext(WorkoutContext);

	const handleChange = event => {
		setValue(event.target.value);
	};

	console.log(value);
	useEffect(() => {
		if (value === "") {
			setAuth2(false);
			setAuth3(false);
			setAuth1(false);
		}
		if (value === "1") {
			setAuth2(false);
			setAuth3(false);
			setAuth1(true);
		}
		if (value === "2") {
			setAuth1(false);
			setAuth3(false);
			setAuth2(true);
		}
		if (value === "3") {
			setAuth2(false);
			setAuth1(false);
			setAuth3(true);
		}
	}, [value]);

	return (
		<>
			<main>
				<NavBarCreate />
				<Container component='section' maxWidth='md'>
					<Box className='create-form'>
						<Typography component='p'>
							Please choose a name for your workout and the amount of days a
							week you can train
						</Typography>

						<FormControl>
							<TextField
								margin='normal'
								required
								fullWidth
								id='workout'
								label='Workout Name'
								value={title}
								onChange={e => setTitle(e.target.value)}
								name='workout'
								autoFocus
							/>
						</FormControl>

						<FormControl sx={{ m: 1, minWidth: 120 }}>
							<InputLabel id='select-days-label'>Days</InputLabel>
							<Select
								label='Days'
								labelId='select-days-label'
								value={value}
								onChange={handleChange}
							>
								<MenuItem value='1'>One day</MenuItem>
								<MenuItem value='2'>Two days</MenuItem>
								<MenuItem value='3'>Three days</MenuItem>
							</Select>
						</FormControl>
						<Box>
							{value && <p>Preview of workout plan.</p>}
							<Grid container align='center'>
								{auth1 && <Template1 />}
							</Grid>
							<Grid container align='center'>
								{auth2 && <Template2 />}
							</Grid>
							<Grid container align='center' margin={2}>
								{auth3 && <Template3 />}
							</Grid>
							<Link className='link' to={value}>
								<Button variant='contained'>Submit</Button>
							</Link>
						</Box>
					</Box>
				</Container>
			</main>
		</>
	);
}
