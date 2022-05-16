import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function User() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
 
  //grabs all user info from db and sets it to allUser state
  useEffect(() => {
    axios.get("http://localhost:8080/users").then((res) => {
      console.log('res', res);
      setAllUsers(res.data);
    });
  }, []);


  //gets checks user input against db
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
  
//deletes cookie 
const logout = () => {
  removeCookie('id')
}

// sets current user and resets email/password state to undefined
const handleSubmit = (e) => {
  e.preventDefault();
  setCurrentUser(correctInfo(password, email));
  console.log("current user", currentUser);
  // login(currentUser.id);
  setEmail("");
  setPassword("");
};

//sets cookie for signed in user
useEffect(() => {
  setCookie('id', currentUser.id, {path: '/'})
}, [currentUser])
console.log(cookies);

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
