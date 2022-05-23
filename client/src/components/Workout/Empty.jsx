import React from "react";
import { Link } from "react-router-dom";

export default function Empty() {
	return (
		<Link to='/new'>
			<img style={{ marginTop: "10rem" }} src='images/add.png' alt='Add' />
		</Link>
	);
}
