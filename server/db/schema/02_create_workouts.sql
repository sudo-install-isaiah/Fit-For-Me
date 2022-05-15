DROP TABLE IF EXISTS workouts CASCADE;
-- CREATE WORKOUTS
CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  name character VARCHAR(255) NOT NULL,
  current? boolean NOT NULL DEFAULT false
);

DROP TABLE IF EXISTS workout_days CASCADE;

CREATE TABLE workout_days (
  id SERIAL PRIMARY KEY,
  workout_id integer REFERENCES workouts(id) ON DELETE CASCADE NOT NULL,
  day integer NOT NULL,
  current? boolean NOT NULL DEFAULT false
);

DROP TABLE IF EXISTS workout_day_exercises CASCADE;

CREATE TABLE workout_day_exercises (
  id SERIAL PRIMARY KEY,
  workout_day_id integer REFERENCES workout_days(id),
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  equipment VARCHAR(255) NOT NULL,
  image TEXT NOT NULL
);

