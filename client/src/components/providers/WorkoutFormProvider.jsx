import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export const WorkoutContext = createContext();

export default function UserProvider(props) {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [exercise, setExercise] = useState([])
  const [equipment, setEquipment] = useState('')
  const [choice, setChoice] = useState({
    day: 1,
    workout: []
  });
  const [day1, setDay1] = useState({
    day: 1,
    workout: []
  });
  const [day2, setDay2] = useState({
    day: 2,
    workout: []
  });
  const [day3, setDay3] = useState({
    day: 3,
    workout: []
  });

  
  const userData = {
    cookies,
    title,
    setTitle,
    value,
    setValue,
    exercise,
    setExercise,
    equipment,
    setEquipment,
    choice,
    setChoice,
    day1,
    setDay1,
    day2,
    setDay2,
    day3,
    setDay3
  };

  return ( <WorkoutContext.Provider value={userData}>{props.children}</WorkoutContext.Provider>)
}
 