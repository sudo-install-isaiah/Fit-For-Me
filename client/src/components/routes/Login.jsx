import React from "react";
import "./Userauth.css";
import Userauth from "./Userauth";
import { Routes, Route, Link, Outlet } from 'react-router-dom'



export default function User() {
  return (
    <main className="user-auth">
      <h1>Please Log In</h1>
      <Link to='/'>homepage</Link>

      <Userauth/>
      <a>Not Registered? <br/>Click here</a>
    </main>
  );
}
