import React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";

export default function TemplatePreview(props) {
	const template = props.template;

	const oneDay = {
		"Day 1": { chest: 2, back: 2, shoulders: 2, legs: 2, arms: 1, core: 1 },
	};

	const twoDay = {
		"Day 1": { chest: 3, back: 3, arms: 2, core: 2 },
		"Day 2": { legs: 3, shoulders: 3, arms: 2, core: 2 },
	};

	const threeDay = {
		"Day 1": { chest: 4, shoulders: 3, arms: 3, core: 2 },
		"Day 2": { back: 4, arms: 3, core: 2 },
		"Day 3": { legs: 4, shoulders: 3, arms: 3, core: 2 },
	};

	const displayTemplate = workout => {
		const result = [];
		for (const day in workout) {
			result.push(
				<List className='template-view'>
					<ListSubheader component='li' className='template-view'>
						{day}
					</ListSubheader>
					{displayMuscle(workout[day])}
				</List>
			);
		}
		return result;
	};

	const displayMuscle = dayObj => {
		const result = [];
		for (const muscle in dayObj) {
			result.push(
        <>
          <li className="template-view">

					<Typography>{muscle}</Typography>
					<ListItemText primary={`${dayObj[muscle]} exercises`} />
          </li>
				</>
			);
		}
		return result;
  };
  
	return (
		<>
			<Box className='template-view'>
				{template === "1" && displayTemplate(oneDay)}
				{template === "2" && displayTemplate(twoDay)}
				{template === "3" && displayTemplate(threeDay)}
			</Box>
		</>
	);
}
