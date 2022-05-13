import React from "react";
import "./Userauth.css";
import Userauth from "./Userauth";


export default function User() {
  return (
    <main className="user-auth">
      <h1>Please Log In</h1>
      <Userauth/>
      <a>Not Registered? <br/>Click here</a>
    </main>
  );
}
