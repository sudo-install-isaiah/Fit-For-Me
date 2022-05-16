import Userauth from "./Userauth";
import "./Userauth.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Logout from "./Logout";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(['user'])
  
  
  // for testing purposes
  useEffect(() => {
    axios.get("http://localhost:8080/users").then((res) => {
      console.log(res);
    });
  }, []);

  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setCookie('Email', email, {path: '/'})
    // setCookie('Password', password, {path: '/'})
    const userObject = {
      name: name,
      email: email,
      password: password,
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
