const express = require('express');
const router = express.Router();

const Exercise = require('../../models/Exercise')

// @route GET api/sessions
// @desc Get All Sessions
router.get('/', (req, res) => {
	Exercise.find()
		.sort({ date: -1 })
		.then(exercises => res.json(exercises))
})

// @route POST api/sessions
// @desc Create A Post
router.post('/', (req, res) => {
	console.log('req.body:', req.body)
	const newExercise = new Exercise({
		date: req.body.day,
		fast: req.body.fast,
		medium: req.body.medium
	})

	newExercise.save().then(exercise => res.json(exercise))

})

module.exports = router
