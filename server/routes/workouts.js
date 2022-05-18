const router = require("express").Router();

module.exports = db => {
	router.get("/", (req, res) => {
		db.query(
			`
			SELECT workouts.name as name,
			workouts.is_current as current_workout
			FROM workouts
			WHERE workouts.user_id = 1 
			ORDER BY workouts.id
		`
		).then(response => {
			console.log(response.rows);
			res.json(response.rows);
		});
	});

	router.get("/days", (req, res) => {
		db.query(
			`
		SELECT 
		workout_days.day,
		workout_day_exercises.name as exercise_name,
		type, equipment, image
		FROM workouts
		JOIN workout_days ON workout_days.workout_id = workouts.id
		JOIN workout_day_exercises ON workout_day_exercises.workout_day_id = workout_days.id
		WHERE workouts.user_id = 1 AND workouts.is_current = true
		GROUP BY workouts.id, workout_days.id, workout_day_exercises.id
		ORDER BY workout_days.day, workout_day_exercises.priority, workout_day_exercises.type;
		`
		).then(response => {
			console.log(response.rows);
			res.json(response.rows);
		});
	});

	router.get("/days/current", (req, res) => {
		db.query(
			`
		SELECT 
		workout_day_exercises.name as exercise_name,
		priority, type, equipment, image
		FROM workouts
		JOIN workout_days ON workout_days.workout_id = workouts.id
		JOIN workout_day_exercises ON workout_day_exercises.workout_day_id = workout_days.id
		WHERE workouts.user_id = 1 AND workouts.is_current = true AND workout_days.is_current = true
		GROUP BY workouts.id, workout_days.id, workout_day_exercises.id
		ORDER BY workout_days.day, workout_day_exercises.priority, workout_day_exercises.type;

		`
		).then(response => {
			console.log(response.rows);
			res.json(response.rows);
		});
	});

	return router;
};
