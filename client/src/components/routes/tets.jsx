import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { UsersContext } from "../providers/UserProvider";
import Signup from './Signup';



const theme = createTheme();

export default function User() {
  const {emailSet, cookies, passwordSet, logout, handleSubmit, email, password} = useContext(UsersContext)

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              value={name}
              onChange={e => nameSet(e)}
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              value={email}
              onChange={e => emailSet(e)}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={password}
              onChange={e => passwordSet(e)}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/signup' variant="body2">
                  Signup
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

/////////////
import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { UsersContext } from "../providers/UserProvider";

export default function User() {
const {emailSet, cookies, passwordSet, logout, handleSubmit, email, password} = useContext(UsersContext)

  return (
    <main className="user-auth">
      <p>
				{cookies.id}
			</p>
      <button onClick={logout}>logout</button>
      <h1>Please Sign In</h1>
      <Link to="/">homepage</Link>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              placeholder="Enter email here."
              id="email"
              onChange={e => emailSet(e)}
              value={email}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter password here."
              id="password"
              onChange={(e) => passwordSet(e)}
              value={password}
              required
            />
          </div>
          <br />
          <div>
            <button>Submit</button>
            <br />
          </div>
        </form>
      </div>
      <div>
        <span>Not Registered?</span>
        <br />
        <Link to="/signup">Signup</Link>
        <br />
      </div>
    </main>
  );
}


//////////////

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../providers/UserProvider";


export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies()
  const {cookies} = useContext(UsersContext) 
  
  
  // for testing purposes
  useEffect(() => {
    axios.get("http://localhost:8080/users").then((res) => {
      console.log(res);
    });
  }, []);

  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    // setCookie('Email', email, {path: '/'})
    const userObject = {
      name: name,
      email: email,
      password: password,
      cookie: Number(cookies.id) //testing purposes
    };
    axios
      .post("http://localhost:8080/users/create", userObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setName("");
    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <main className="user-auth">
      <h1>Please Sign Up</h1>
      <p>{cookies.id}</p>
      <div>
        <Link to="/">homepage</Link>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <span>name</span>
            <br />
            <input
              type="text"
              placeholder="Enter name here."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <span>Email</span>
            <br />
            <input
              type="text"
              placeholder="Enter email here."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="form-group">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter password here."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div>
            <button type="submit">Submit</button>
            <br />
          </div>
        </form>
      </div>
    </main>
  );
}
