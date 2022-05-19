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
  const [choice, setChoice] = useState([])
  //deletes cookie
  const logout = () => {
    removeCookie("id");
  };
  
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
    setChoice
  };

  return ( <WorkoutContext.Provider value={userData}>{props.children}</WorkoutContext.Provider>)
}
 