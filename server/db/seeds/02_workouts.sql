-- workout seeds

INSERT INTO workouts (id, user_id, name, is_current) VALUES (1, 1, 'Test Workout Plan', false);

INSERT INTO workout_days (id, workout_id, day, is_current) VALUES (1, 1, 1, false);

INSERT INTO workout_day_exercises (id, workout_day_id, name, type, equipment, image)
VALUES (1, 1, 'barbell bench press', 'chest', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif'
);

INSERT INTO workout_day_exercises (id, workout_day_id, name, type, equipment, image)
VALUES (2, 1, 'barbell decline bench press', 'chest', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0033.gif'
);
