import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/UserRoutes/Signup";
import Login from "./components/UserRoutes/Login";
import { CookiesProvider } from "react-cookie";
import UserProvider from "./components/providers/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import NewWorkout from "./components/NewWorkout/";
import OneDay from './components/pickWorkouts/OneDay';
import TwoDay from "./components/pickWorkouts/TwoDay";
import WorkoutFormProvider from './components/providers/WorkoutFormProvider'
import ThreeDay from './components/pickWorkouts/ThreeDay'
import Summary3 from "./components/summaries/Summary3";
import Summary1 from "./components/summaries/Summary1";
import Summary2 from "./components/summaries/Summary2";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CookiesProvider>
        <UserProvider>
        <WorkoutFormProvider>
            <BrowserRouter >
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='login' element={<Login />} />
                    <Route path='new' element={<NewWorkout />} />
                    <Route path='new/1' element={<OneDay/>}/>
                    <Route path='new/2' element={<TwoDay/>}/>
                    <Route path='new/3' element={<ThreeDay/>}/>
                    <Route path='new/1/summary' element={<Summary1/>}/>
                    <Route path='new/2/summary' element={<Summary2/>}/>
                    <Route path='new/3/summary' element={<Summary3/>}/>
                </Routes>
            </BrowserRouter>
            </WorkoutFormProvider>
        </UserProvider>
    </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
