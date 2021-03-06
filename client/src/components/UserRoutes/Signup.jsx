import * as React from "react";
import { Button, TextField, Grid, Box, Typography, Container} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UsersContext } from "../providers/UserProvider";
import axios from "axios";
import { useCookies } from "react-cookie";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import "./loginSignup.css";

export default function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cookie, setCookie] = useCookies();
	const { cookies, setCurrentUser, currentUser } = useContext(UsersContext);


	const nameSet = e => {
		setName(e.target.value);
	};
	const emailSet = e => {
		setEmail(e.target.value);
	};
	const passwordSet = e => {
		setPassword(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		const userObject = {
			name: name,
			email: email,
			password: password,
		};
		// cookie: Number(cookies.id) //testing purposes
		axios
			.post("http://localhost:8080/users/create", userObject)
			.then(res => {
				setCookie("id", res.data.id, { path: "/" });
				// console.log('res', res.data.name, { path: '/'});
				setCookie('name', res.data.name, { path: '/'});
				setName("");
				setEmail("");
				setPassword("");
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<>
			<main className='backdrop'>
				{cookies.id && <Navigate to='/' replace={true} />}
				<Container component='section' maxWidth='xs'>
					<Box className='login-signup'>
						<Typography component='h1' variant='h5'>
							<FitnessCenterIcon className='logo-icon' />
							FitForMe
						</Typography>
						<Box component='form' onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
							<TextField
								margin='normal'
								required
								fullWidth
								id='name'
								label='Name'
								value={name}
								onChange={e => nameSet(e)}
								name='name'
								autoComplete='name'
								autoFocus
							/>
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
								Sign Up
							</Button>
							<Grid container>
								<Grid item>
									<Link className='link' to='/Login' variant='body2'>
										Login
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Container>
			</main>
		</>
	);
}
