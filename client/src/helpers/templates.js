import { List, ListItemText, Typography, ListSubheader } from "@mui/material/";

// Template logic here

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

// creates the Day list
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

// creates the exercise group list items

const displayMuscle = dayObj => {
	const result = [];
	for (const muscle in dayObj) {
		result.push(
			<li className='template-view'>
				<Typography>{muscle}</Typography>
				<ListItemText primary={`${dayObj[muscle]} exercises`} />
			</li>
		);
	}
	return result;
};

// array of workout plans with their days and exercise groups

export const displayTemplateOne = displayTemplate(oneDay);
export const displayTemplateTwo = displayTemplate(twoDay);
export const displayTemplateThree = displayTemplate(threeDay);
