const express = require("express");
const router = express.Router();
const { exerciseAPI, exerciseFilter } = require("../helpers/apiHelpers");

router.get("/chest", (req, res) => {
	console.log(`result is ------- `, req);
	exerciseAPI("chest").then(response => {
		const foo = exerciseFilter(req.query.equipment, response.data);
		res.json(foo);
	});
});
router.get("/back", (req, res) => {
	exerciseAPI("back").then(response => {
		res.json(response.data);
	});
});
router.get("/shoulders", (req, res) => {
	exerciseAPI("shoulders").then(response => {
		res.json(response.data);
	});
});

module.exports = router;
