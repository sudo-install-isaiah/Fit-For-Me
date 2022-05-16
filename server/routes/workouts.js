const router = require("express").Router();

module.exports = db => {
	router.get("/", (req, res) => {
		db.query(
			`
    SELECT workouts.name as name,
      workouts.is_current as current_workout, workout_days.day,
      workout_days.is_current as current_day,
      workout_day_exercises.name as exercise_name,
      type, equipment, image
    FROM workouts
    JOIN workout_days ON workout_days.workout_id = workouts.id
    JOIN workout_day_exercises ON workout_day_exercises.workout_day_id = workout_days.id
    WHERE workouts.user_id = 1 
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
