const db = require("../configs/db.config");

const authenticate = (email, password, cb) => {
	const query = `
    SELECT * FROM users WHERE email = $1`;
	const value = [email];
	return db
		.query(query, value)
		.then(res => {
			if (cb(password, res.rows[0].password)) {
				return res.rows[0];
			}
		})
		.catch(err => console.log(err.message));
};

module.exports = { authenticate };
