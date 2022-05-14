const axios = require("axios");
const { API_KEY } = process.env;

const exerciseAPI = function (bodyPart) {
	const options = {
		method: "GET",
		url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
		headers: {
			"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
			"X-RapidAPI-Key": API_KEY,
		},
	};

	return axios
		.request(options)
		.then(function (response) {
			return response;
		})
		.catch(function (error) {
			console.error(error);
		});
};

const exerciseFilter = function (equipment, array) {
	return array.filter(exercise => {
		return exercise.equipment === equipment;
	});
};

module.exports = { exerciseAPI, exerciseFilter };
