import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export const UsersContext = createContext();

export default function UserProvider(props) {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [currentUser, setCurrentUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailSet = (e) => {
    setEmail(e.target.value);
  };

  const passwordSet = (e) => {
    setPassword(e.target.value);
  };

  // sets current user and resets email/password state to undefined
  const handleSubmit = (e) => {
    e.preventDefault();
    return axios
      .post("http://localhost:8080/users/login", { email, password })
      .then((res) => {
        setCookie("id", res.data.id, { path: "/" });
        setCookie("name", res.data.name, { path: "/" });
        setEmail("");
        setPassword("");
        setCurrentUser(cookies.name);
      });
  };
  //deletes cookie
  const logout = () => {
    removeCookie("id", { path: "/" });
    removeCookie("name", { path: "/" });
    setCurrentUser("");
  };

  const userData = {
    cookies,
    email,
    emailSet,
    password,
    passwordSet,
    currentUser,
    setCurrentUser,
    handleSubmit,
    logout,
  };

  return (
    <UsersContext.Provider value={userData}>
      {props.children}
    </UsersContext.Provider>
  );
}
