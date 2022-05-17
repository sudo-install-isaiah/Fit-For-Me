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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const theme = createTheme();

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies()
  const {cookies} = useContext(UsersContext) 
  
  const nameSet = (e) => {
    setName(e.target.value)
  }
  const emailSet = (e) => {
    setEmail(e.target.value)
  }
  const passwordSet = (e) => {
    setPassword(e.target.value)
  }
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
            Sign up
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}