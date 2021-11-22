const express = require('express');
const mongoose = require('mongoose');
const exercises = require('./routes/api/exercises')

const app = express();
app.use(express.json())

// Database
const db = require('./config/keys').mongoURI

mongoose
	.connect(db)
	.then(() => console.log('mongoDB Connected'))
	.catch(err => console.log(err))

app.use('/api/exercises', exercises)

const port = 5000

app.listen(port, () => console.log(`Server started on PORT ${port}`))
