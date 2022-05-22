import { useContext, useEffect, useState } from "react";

import { Select, MenuItem, FormControl, InputLabel, Box, TextField, Grid, Button, Container, Typography } from "@mui/material";
import NavBarCreate from "./NavBarCreate";
import { Link } from "react-router-dom";
import { WorkoutContext } from "../providers/WorkoutFormProvider";
import TemplatePreview from "./TemplatePreview";
import "./index.css";

export default function NewWorkout() {
	const { title, setTitle, value, setValue } =
		useContext(WorkoutContext);

	return (
		<>
			<main>
				<NavBarCreate />
				<Container component='section' maxWidth='sm'>
					<Box className='create-form'>
						<Typography component='p'>
							Most importantly, How many days can you train?
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
								onChange={e => setValue(e.target.value)}
							>
								<MenuItem value='1'>One day</MenuItem>
								<MenuItem value='2'>Two days</MenuItem>
								<MenuItem value='3'>Three days</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Container>
				<Container component='section' maxWidth='md'>
					<TemplatePreview template={value} />
					<Grid
						sx={{ paddingBottom: "2rem" }}
						container
						direction='row'
						justifyContent='center'
						alignItems='center'
					>
						<Link className='link' to={value}>
							<Button variant='contained'>Choose Workout Plan</Button>
						</Link>
					</Grid>
				</Container>
			</main>
		</>
	);
}
