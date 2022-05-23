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
			res.json(response.rows);
		});
	});

	router.get("/days/current", (req, res) => {
		const user = Number(req.query.id);
		db.query(
			`
		SELECT 
		workout_day_exercises.name as exercise_name,
		priority, type, equipment, image, workouts.name
		FROM workouts
		JOIN workout_days ON workout_days.workout_id = workouts.id
		JOIN workout_day_exercises ON workout_day_exercises.workout_day_id = workout_days.id
		WHERE workouts.user_id = ${user} AND workouts.is_current = true AND workout_days.is_current = true
		GROUP BY workouts.id, workout_days.id, workout_day_exercises.id
		ORDER BY workout_days.day, workout_day_exercises.priority, workout_day_exercises.type;
		`
		)
			.then(response => {
				res.json(response.rows);
			})
			.catch(err => {
				console.log(err);
			});
	});

	router.put("/iscurrent", (req, response) => {
		const body = req.body;
		const isCurrent = body.isCurrent;
		const user = body.userId;
		currentWorkout(user).then(result => {
			const workoutIdRef = result.rows[0].workout_id;
			const workoutDaysId = result.rows[0].id;
			workoutDaysIsCurrent(isCurrent, workoutDaysId).then(result => {
				const day = result.rows[0].day;
				const add = day + 1;
				checkForAnotherDay(workoutIdRef, add)
					.then(result => {
						if (!result.rows[0]) {
							workoutIsCurrent(false, workoutIdRef, user);
							response.json(result);
						} else {
							const newWorkoutDayId = result.rows[0].id;
							workoutDaysIsCurrent(true, newWorkoutDayId);
							response.json(result);
						}
					})
					.catch(err => {
						console.log(err);
					});
			});
		});
	});

	router.post("/new", (req, response) => {
		const workoutData = req.body;
		const userID = workoutData.userId;
		const title = workoutData.title;
		const day = workoutData.day;
		addWorkout(userID, title).then(res => {
			addWorkoutDays(res.rows[0].id, day)
				.then(res => {
					workoutData.workouts.map(ex => {
						addWorkoutDayExercises(
							res.rows[0].id,
							ex.name,
							ex.bodyPart,
							ex.equipment,
							ex.gifUrl
						);
					});
					response.json(res);
				})
				.catch(err => {
					console.log(err);
				});
		});
	});

	// TODO refactor into one route

	router.post("/new/2", (req, response) => {
		const workoutData = req.body;
		const userID = workoutData.userId;
		const title = workoutData.title;
		addWorkout(userID, title).then(res => {
			workoutData.days.map(d => {
				addWorkoutDays(res.rows[0].id, d.day)
					.then(res => {
						d.workouts.workout.map(ex => {
							addWorkoutDayExercises(
								res.rows[0].id,
								ex.name,
								ex.bodyPart,
								ex.equipment,
								ex.gifUrl
							);
						});
						response.json(res);
					})
					.catch(err => {
						console.log(err);
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
	const currentWorkout = user => {
		const queryString = `
			SELECT 
			workout_days.id, workout_days.workout_id
			FROM workouts
			JOIN workout_days ON workout_days.workout_id = workouts.id
			WHERE workouts.user_id = $1 
			AND workout_days.is_current = true;
	`;
		return db.query(queryString, [user]);
	};

	const workoutIsCurrent = (isCurrent, workoutId, user) => {
		const queryString = `
		UPDATE workouts
		SET is_current = $1
		FROM workout_days
		WHERE workout_days.id = $2
		AND user_id = $3
		RETURNING *;
		`;
		return db.query(queryString, [isCurrent, workoutId, user]);
	};

	const workoutDaysIsCurrent = (isCurrent, workoutId) => {
		const queryString = `
		UPDATE workout_days
		SET is_current = $1
		FROM workouts
		WHERE workout_days.id = $2
		RETURNING *;
		`;
		return db.query(queryString, [isCurrent, workoutId]);
	};

	const checkForAnotherDay = (workoutId, day) => {
		const queryString = `
		SELECT 
		workout_days.day, workout_days.id
		FROM workouts
		JOIN workout_days ON workout_days.workout_id = workouts.id
		WHERE workout_days.workout_id = $1 
		AND workout_days.day = $2
		AND workout_days.is_current = false;
		`;
		return db.query(queryString, [workoutId, day]);
	};

	return router;
};
