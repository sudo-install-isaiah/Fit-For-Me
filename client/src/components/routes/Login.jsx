import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { UsersContext } from "../providers/UserProvider";

export default function User() {
const {setEmail, cookies, setPassword, logout, handleSubmit, email, password} = useContext(UsersContext)

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
