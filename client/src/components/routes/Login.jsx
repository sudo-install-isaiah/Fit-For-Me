import React from "react";
import "./Userauth.css";
import Userauth from "./Userauth";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

export default function User() {
  // const userRef = useRef();
  // const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errMsg, setErrmsg] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
 
  useEffect(() => {
    axios.get("http://localhost:8080/users").then((res) => {
      console.log('res', res);
      setAllUsers(res.data);
    });
  }, []);

  // let navigate = useNavigate()

  const getUserbyEmail = (email) => {
    const arrayUser = allUsers.filter((user) => user.email === email);
    return arrayUser;
  };

  //checks if input email and password match db user info
  const correctInfo = (password, email) => {
    const user = getUserbyEmail(email);
    const pwd = user.map((user) => user.password);
    if (pwd[0] === password) {
      return user[0];
    }
    return console.log("error");
  };
  
  // console.log('@@@@@', currentUser);

const logout = () => {
  removeCookie('id')
}

const handleSubmit = (e) => {
  e.preventDefault();
  setCurrentUser(correctInfo(password, email));
  console.log("current user", currentUser);
  // login(currentUser.id);
  setEmail("");
  setPassword("");
};

useEffect(() => {
  setCookie('id', currentUser.id, {path: '/'})
}, [currentUser])
console.log(cookies);

  return (
    <main className="user-auth">
      {/* <Logout/> */}
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
              // ref={userRef}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
