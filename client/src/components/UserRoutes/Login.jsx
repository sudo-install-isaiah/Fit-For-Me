import * as React from "react";
import { Button, TextField, Grid, Box, Typography, Container} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../providers/UserProvider";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import "./loginSignup.css";

export default function User() {
	const {
		emailSet,
		cookies,
		passwordSet,
		handleSubmit,
		email,
		password
	} = useContext(UsersContext);

	return (
		<main className='backdrop'>
			{cookies.id && <Navigate to='/' replace={true} />}
			<Container component='section' maxWidth='xs'>
				<Box className='login-signup'>
					<Typography component='h1' variant='h5'>
						<FitnessCenterIcon className='logo-icon' />
						FitForMe
					</Typography>
					<Box
						component='form'
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin='normal'
							required
							fullWidth
							id='email'
							label='Email Address'
							value={email}
							onChange={e => emailSet(e)}
							name='email'
							autoComplete='email'
							autoFocus
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='password'
							label='Password'
							value={password}
							onChange={e => passwordSet(e)}
							type='password'
							id='password'
							autoComplete='current-password'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item>
								<Link className='link' to='/signup' variant='body2'>
									Signup
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</main>
	);
}
