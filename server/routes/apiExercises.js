const express = require("express");
const router = express.Router();
const { exerciseAPI, exerciseFilter } = require("../helpers/apiHelpers");

router.get("/:type/:equipment", (req, res) => {
	exerciseAPI(req.params.type)
		.then(response => {
			const result = exerciseFilter(req.params.equipment, response.data).slice(0, 10);
			res.json(result);
		})
		.catch(err => {
			console.log(err);
		});
});

module.exports = router;
