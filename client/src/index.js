import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/routes/Signup";
import Login from "./components/routes/Login";
import { CookiesProvider } from "react-cookie";
import UserProvider from "./components/providers/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "@popperjs/core";
import "./index.css";
import NewWorkout from './components/NewWorkout';
import DayOne from './components/pickWorkouts/OneDay';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CookiesProvider>
        <UserProvider>
            <BrowserRouter >
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='login' element={<Login />} />
                    <Route path='new' element={<NewWorkout />} />
                    <Route path='test' element={<DayOne/>}/>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
