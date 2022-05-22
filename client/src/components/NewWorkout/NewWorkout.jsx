import React from "react";
import {
	Container,
	Box,
	Typography,
	FormControl,
	TextField,
	InputLabel,
	Select,
	Button,
	MenuItem,
	Grid,
} from "@mui/material";
import TemplatePreview from "./TemplatePreview";

export default function NewWorkout({
	title,
	chooseDay,
	addTitle,
	value,
	handleClick,
}) {
	return (
		<>
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
							onChange={e => addTitle(e)}
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
							onChange={e => chooseDay(e)}
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
					<Button onClick={() => handleClick(value)} variant='contained'>
						Choose Workout Plan
					</Button>
				</Grid>
			</Container>
		</>
	);
}
