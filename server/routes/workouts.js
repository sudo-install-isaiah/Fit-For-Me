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
		console.log(req);
		const user = Number(req.query.id);
		db.query(
			`
		SELECT 
		workout_day_exercises.name as exercise_name,
		priority, type, equipment, image
		FROM workouts
		JOIN workout_days ON workout_days.workout_id = workouts.id
		JOIN workout_day_exercises ON workout_day_exercises.workout_day_id = workout_days.id
		WHERE workouts.user_id = ${user} AND workouts.is_current = true AND workout_days.is_current = true
		GROUP BY workouts.id, workout_days.id, workout_day_exercises.id
		ORDER BY workout_days.day, workout_day_exercises.priority, workout_day_exercises.type;

		`
		).then(response => {
			console.log(response.rows);
			res.json(response.rows);
		});
	});

	router.post("/new", (req, res) => {
		console.log("req", req.body);
		const workoutData = req.body;
		const userID = workoutData.userId;
		const title = workoutData.title;
		const day = workoutData.day;
		addWorkout(userID, title).then(res => {
			console.log("workout id", res.rows[0].id);
			addWorkoutDays(res.rows[0].id, day).then(res => {
				console.log("after add workoutdays id", res.rows[0].id);
				workoutData.workouts.map(ex => {
					addWorkoutDayExercises(
						res.rows[0].id,
						ex.name,
						ex.bodyPart,
						ex.equipment,
						ex.gifUrl
					);
				});
			});
		});
	});


	router.post('/new/2', (req, res) => {
		console.log('req', req.body);
		const workoutData = req.body;
		const userID = workoutData.userId;
		const title = workoutData.title;
		addWorkout(userID, title)
		.then(res => { 
				workoutData.days.map(d => {
					addWorkoutDays(res.rows[0].id, d.day)
					.then(res => {
						  d.workouts.workout.map(ex => {
								console.log('ex', ex);
									addWorkoutDayExercises(res.rows[0].id, ex.name, ex.bodyPart, ex.equipment, ex.gifUrl);
								});
							});

						});
				});

			});
	// adds user_id and title of workout to db
	const addWorkout = (userID, title) => {
		const queryString = `
		INSERT INTO workouts (user_id, name, is_current)
		VALUES($1, $2, $3)
		RETURNING *
		`;
		return db.query(queryString, [userID, title, true]);
	};
	//needs fixed for more than 1 day
	const addWorkoutDays = (workoutID, day) => {
		const isDay = day => {
			if (day !== 1) {
				return false;
			} else {
				return true;
			}
		};
		const queryString = `
		INSERT INTO workout_days (workout_id, day, is_current)
		VALUES($1, $2, $3)
		RETURNING *
		`;
		return db.query(queryString, [workoutID, day, isDay(day)]);
	};
	const addWorkoutDayExercises = (
		workoutDayID,
		exercise,
		bodyPart,
		equipment,
		image
	) => {
		const priority = bodyPart => {
			switch (bodyPart) {
				case "chest":
				case "back":
				case "upper legs":
					return 1;
				case "shoulders":
				case "upper arms":
					return 2;
				case "waist":
					return 3;
			}
		};

		const queryString = `
		INSERT INTO workout_day_exercises (workout_day_id, name, priority, type, equipment, image)
		VALUES($1, $2, $3, $4, $5, $6)
		RETURNING *
		`;
		return db.query(queryString, [
			workoutDayID,
			exercise,
			priority(bodyPart),
			bodyPart,
			equipment,
			image,
		]);
	};

	return router;
};
