import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

export const UsersContext = createContext();

export default function UserProvider(props) {
	// const [allUsers, setAllUsers] = useState([]);
	const [cookies, setCookie] = useCookies(null);
	const [currentUser, setCurrentUser] = useState({});
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// let navigate = useNavigate();

	const emailSet = e => {
		setEmail(e.target.value);
	};

	const passwordSet = e => {
		setPassword(e.target.value);
	};

	//sets cookie for signed in user
	// useEffect(() => {
	// 	setCookie("id", currentUser.id, { path: "/" });
	// }, [currentUser]);

	// sets current user and resets email/password state to undefined
	const handleSubmit = e => {
		e.preventDefault();
		return axios
			.post("http://localhost:8080/users/login", { email, password })
			.then(res => {
				setCookie("id", res.data.id, { path: "/" });
				setEmail("");
				setPassword("");
			});
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
	};

	return (
		<UsersContext.Provider value={userData}>
			{props.children}
		</UsersContext.Provider>
	);
}
