const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const db = require("./configs/db.config");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const apiExercisesRouter = require("./routes/apiExercises.js");
const workoutsRouter = require("./routes/workouts.js");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter(db));
app.use("/api", apiExercisesRouter);
app.use("/workouts", workoutsRouter(db));

module.exports = app;
