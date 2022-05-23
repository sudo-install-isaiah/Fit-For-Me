import React, { useContext } from "react";
import {
  AddCircle,
  FitnessCenter,
  ArrowBackIosNew,
  ArrowForwardIos,
} from "@mui/icons-material/";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { UsersContext } from "./providers/UserProvider";
import { Button } from "@mui/material";

export default function Navbar(props) {
  const { logout, currentUser } = useContext(UsersContext);

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="nav-item logo ">
          <FitnessCenter className="logo-icon"></FitnessCenter>
          <span>FitForMe</span>
        </div>
        <span className="nav-item">
         💪 Welcome {currentUser}! 💪
        </span>
        <div className="nav-item">
          <Link to="/new">
            <AddCircle className="logo-icon-circle"></AddCircle>
          </Link>
          <Button size="small" variant="contained" onClick={logout}>Logout</Button>
        </div>
      </div>
    </nav>
  );
}
