-- workout seeds

-- day 1

INSERT INTO workouts (id, user_id, name, is_current) VALUES (1, 1, 'Test Workout Plan', false);

INSERT INTO workout_days (id, workout_id, day, is_current) VALUES (1, 1, 1, false);

INSERT INTO workout_day_exercises (id, workout_day_id, name, priority, type, equipment, image)
VALUES (1, 1, 'barbell bench press', 1, 'chest', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif'
);

INSERT INTO workout_day_exercises (id, workout_day_id, name, priority, type, equipment, image)
VALUES (2, 1, 'barbell decline bench press', 1, 'chest', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0033.gif'
);

INSERT INTO workout_day_exercises (id, workout_day_id, name, priority, type, equipment, image)
VALUES (3, 1, 'squat', 1, 'legs', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif'
);

INSERT INTO workout_day_exercises (id, workout_day_id, name, priority, type, equipment, image)
VALUES (4, 1, 'lunge', 1,  'legs', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0033.gif'
);

INSERT INTO workout_day_exercises (id, workout_day_id, name, priority, type, equipment, image)
VALUES (5, 1, 'situps', 2, 'core', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif'
);

INSERT INTO workout_day_exercises (id, workout_day_id, name, priority, type, equipment, image)
VALUES (6, 1, 'hanging leg raises', 2, 'core', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0033.gif'
);

-- day 2

INSERT INTO workout_days (id, workout_id, day, is_current) VALUES (2, 1, 2, false);

INSERT INTO workout_day_exercises (id, workout_day_id, name, priority, type, equipment, image)
VALUES (7, 2, 'curls', 3, 'arms', 'dumbbell', 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif'
);

INSERT INTO workout_day_exercises (id, workout_day_id, name, priority, type, equipment, image)
VALUES (8, 2, 'preacher curls', 3, 'arms', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0033.gif'
);

INSERT INTO workout_day_exercises (id, workout_day_id, name, priority, type, equipment, image)
VALUES (9, 2, 'db raises', 2, 'shoulders', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif'
);

INSERT INTO workout_day_exercises (id, workout_day_id, name, priority, type, equipment, image)
VALUES (10, 2, 'ohp', 2, 'shoulders', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0033.gif'
);

INSERT INTO workout_day_exercises (id, workout_day_id, name, priority, type, equipment, image)
VALUES (11, 2, 'deadlift', 1, 'back', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif'
);

INSERT INTO workout_day_exercises (id, workout_day_id, name, priority, type, equipment, image)
VALUES (12, 2, 'rows', 1, 'back', 'barbell', 'http://d205bpvrqc9yn1.cloudfront.net/0033.gif'
);
