const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { authenticate } = require("../helpers/userHelpers");

module.exports = db => {
	// all routes will go here
	const getEmail = function (email) {
		const queryStringEmail = `SELECT *
    FROM users
    WHERE email = $1
    `;
		const values = [email];
		return db.query(queryStringEmail, values).then(result => {
			return result.rows[0];
		});
	};

	const addUser = function (name, email, password) {
		const queryString = `INSERT INTO users (name, email, password)
  VALUES(
  $1, $2, $3) RETURNING *`;
		return db.query(queryString, [name, email, password]);
	};

	router.get("/", (req, res) => {
		const command = "SELECT * FROM users";
		db.query(command).then(data => {
			res.json(data.rows);
		});
	});

	router.post("/create", (req, res) => {
		const { name, password, email } = req.body;
		if (email === "" || password === "" || name === "") {
			return res.status(403).send("Invalid User");
		}
		// bcrypt used to hash a password
		const hashedPassword = bcrypt.hashSync(password, 10);

		getEmail(email).then(checkemail => {
			if (checkemail) {
				res.status(400).send("Email already exists");
			} else {
				addUser(name, email, hashedPassword).then(result => {
					res.json(result.rows[0]);
				});
			}
		});
	});

	router.post("/login", (req, res) => {
		const { email, password } = req.body;
		authenticate(email, password, bcrypt.compareSync)
			.then(result => {
				res.json(result);
			})
			.catch(err => {
				res.send({ error: err.message });
			});
	});

	return router;
};
