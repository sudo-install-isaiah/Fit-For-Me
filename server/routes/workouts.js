const router = require("express").Router();

module.exports = db => {
	router.get("/", (req, res) => {

		db.query(
			`
		
			SELECT workouts.name as name,
		workouts.is_current as current_workout, workout_days.day, COUNT(workout_days.day) AS Total_number_of_workouts_left
		FROM workouts
		JOIN workout_days ON workout_days.workout_id = workouts.id			WHERE workouts.user_id = 1 AND workout_days.is_current = true
		GROUP BY workouts.id, workout_days.day
		ORDER BY workouts.id;
			

    `
		).then(response => {
			console.log(response.rows);
			res.json(response.rows);
		});
	});
	return router;
};

// so code isnt hardcoded
/*
const queryString = `
SELECT workouts.name as name,
	workouts.is_current as current_workout, workout_days.day, COUNT(workout_days.day) AS Total_number_of_workouts_left
FROM workouts
JOIN workout_days ON workout_days.workout_id 		= workouts.id			
WHERE workouts.user_id = $1 AND workout_days.		is_current = $2
GROUP BY workouts.id, workout_days.day
ORDER BY workouts.id;
`;

const values = [userId, boolean]

return db.query(queryString, values)
.then((result) => {
	res.json(result.rows)
});
*/
/*
const queryString = `
SELECT 
workout_day_exercises.name as exercise_name,
type, equipment, image
FROM workouts
JOIN workout_days ON workout_days.workout_id = workouts.id
JOIN workout_day_exercises ON workout_day_exercises.workout_day_id = workout_days.id
WHERE workouts.user_id = $1 AND workouts.is_current = $2 AND workout_days.is_current = $3
GROUP BY workouts.id, workout_days.id, workout_day_exercises.id
ORDER BY workout_days.day, workout_day_exercises.priority, workout_day_exercises.type;
`;

const values = [userId, boolean, boolean2]

return db.query(queryString, values)
.then((result) => {
	res.json(result.rows)
});
*/

/*
const queryString = `
UPDATE workouts
SET is_current = NOT is_current
WHERE workouts.user_id = $1 AND workouts.id = $2
RETURNING *;
`;

const values = [userId, workoutId]

return db.query(queryString, values)
.then((result) => {
	res.json(result.rows)
});
*/

/*
const queryString = `
UPDATE workout_days
SET is_current = NOT workout_days.is_current
FROM workouts
WHERE workouts.user_id = $1 AND workout_days.id = $2
RETURNING *;
`;

const values = [userId, workoutDayId]

return db.query(queryString, values)
.then((result) => {
	res.json(result.rows)
});
*/

/*
UPDATE workout_days
Set is_current = false
WHERE workout.user_id = 1 AND workout_days.id 2
RETURNING *;
`;

const values = [userId, workoutDayId]

return db.query(queryString, values)
.then((result) => {
	res.json(result.rows)
});
*/