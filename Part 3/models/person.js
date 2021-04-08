const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('Connecting to MongoDB', url)
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
	.then(result => {
		console.log('Connected to MongoDB')
	}).catch(err => {
		console.log('Error Connecting to MongoDB:', err.message)
})

const phoneBookSchema = new mongoose.Schema({
	name : {
		type: String,
		minlength: 3,
		required: true
	},
	phoneNumber : {
		type: String,
		minlength: 6,
		required: true
	}
})

phoneBookSchema.set('toJSON', {
	transform:(document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
    	delete returnedObject.__v
	}
})

module.exports = mongoose.model('Phonebook', phoneBookSchema)

