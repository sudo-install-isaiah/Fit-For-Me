import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export const UsersContext = createContext();

export default function UserProvider(props) {
  const [allUsers, setAllUsers] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [currentUser, setCurrentUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  //grabs all user info from db and sets it to allUser state
  useEffect(() => {
    axios.get("http://localhost:8080/users").then((res) => {
      setAllUsers(res.data);
    });
  }, []);

  const emailSet = (e) => {
    setEmail(e.target.value)
  }

  const passwordSet = (e) => {
    setPassword(e.target.value)
  }

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
    removeCookie("id");
  };

  const login = () => {
    setCurrentUser(correctInfo(password, email));
  };

  //sets cookie for signed in user
  useEffect(() => {
    setCookie("id", currentUser.id, { path: "/" });
  }, [currentUser]);

  // sets current user and resets email/password state to undefined
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    setEmail("");
    setPassword("");
  };
  
  const userData = {
    cookies,
    allUsers,
    setAllUsers,
    login,
    logout,
    getUserbyEmail,
    correctInfo,
    email,
    emailSet,
    password,
    passwordSet,
    currentUser,
    setCurrentUser,
    handleSubmit
  };

  return ( <UsersContext.Provider value={userData}>{props.children}</UsersContext.Provider>)
}
