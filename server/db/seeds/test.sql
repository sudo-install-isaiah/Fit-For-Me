-- returns all workouts belonging to a user

	SELECT workouts.name as name,
		workouts.is_current as current_workout, workout_days.day, COUNT(workout_days.day) AS Total_number_of_workouts_left
		FROM workouts
		JOIN workout_days ON workout_days.workout_id = workouts.id			WHERE workouts.user_id = 1 AND workout_days.is_current = true
		GROUP BY workouts.id, workout_days.day
		ORDER BY workouts.id;

--  returns all days where the current workout is true

SELECT 
workout_days.day,
workout_day_exercises.name as exercise_name,
type, equipment, image
FROM workouts
JOIN workout_days ON workout_days.workout_id = workouts.id
JOIN workout_day_exercises ON workout_day_exercises.workout_day_id = workout_days.id
WHERE workouts.user_id = 1 AND workouts.is_current = true
GROUP BY workout_days.day, workouts.id, workout_days.id, workout_day_exercises.id
ORDER BY workout_days.day, workout_day_exercises.priority, workout_day_exercises.type;


-- returns the current day for the workout

SELECT 
workout_day_exercises.name as exercise_name,
type, equipment, image
FROM workouts
JOIN workout_days ON workout_days.workout_id = workouts.id
JOIN workout_day_exercises ON workout_day_exercises.workout_day_id = workout_days.id
WHERE workouts.user_id = 1 AND workouts.is_current = true AND workout_days.is_current = true
GROUP BY workouts.id, workout_days.id, workout_day_exercises.id
ORDER BY workout_days.day, workout_day_exercises.priority, workout_day_exercises.type;

-- updates the current workout to true

UPDATE workouts
SET is_current = NOT is_current
WHERE workouts.user_id = 1 AND workouts.id = 1
RETURNING *;


-- Updates the current day to true
UPDATE workout_days
SET is_current = NOT workout_days.is_current
FROM workouts
WHERE workouts.user_id = 1 AND workout_days.id = 2
RETURNING *;

-- Updates workout_days day to false after it is completed
UPDATE workout_days
Set is_current = false
From workout_days
WHERE workout.user_id = 1 AND workout_days.id 2
RETURNING *;


