const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
	day: {
		type: Date,
		default: Date.now
	},
	fast: {
		type: String
	},
	medium: {
		type: String
	}
})

module.exports = Exercise = mongoose.model('exercise', ExerciseSchema)
