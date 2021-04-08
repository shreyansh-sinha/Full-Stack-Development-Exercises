// const mongoose = require('mongoose')

// if(process.argv.length < 3) {
// 	console.log('Please Provide Password as an argument: node mongo.js password')
// 	process.exit(1)
// }

// const password = process.argv[2]

// //establish connection to database
// const url = `mongodb+srv://Shreyansh:${password}@cluster0.qjwd7.mongodb.net/notes-app?retryWrites=true&w=majority`

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// // first define a schema for the db
// const noteSchema = new mongoose.Schema({
// 	content : String,
// 	date : Date,
// 	important : Boolean,
// })

// // use schema definition by converting moteSchema into model to work with
// //collection created
// // collection name : notes (plural of 'Note' with 'N' in lowercase)
// const Note = mongoose.model('Note', noteSchema)

// // add document to collection
// // const note = new Note ({
// // 	content : 'GET and POST are the most important methods of HTTP protocol',
// // 	date : Date(),
// // 	important : true,
// // })

// // note.save().then(result => {
// // 	console.log('Note Saved!')
// // 	mongoose.connection.close()
// // })

// Note.find({}).then(result => {
// 	result.forEach(note => {
// 		console.log(note)
// 	})
// 	mongoose.connection.close()
// })

// const mongoose = require('mongoose')

// if(process.argv.length < 3) {
// 	console.log('Please provide all details as argument : node mongo.js password name number')
// 	process.exit(1)
// }

// const password = process.argv[2]

// const url = `mongodb+srv://Shreyansh:${password}@cluster0.qjwd7.mongodb.net/notes-app?retryWrites=true&w=majority`

// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// const phonebookSchema = new mongoose.Schema({
// 	name : String,
// 	phoneNumber : String,
// })

// const PhoneBook = mongoose.model('PhoneBook', phonebookSchema)

// if(process.argv.length === 3) {
// 	if(PhoneBook.length < 1) {
// 		console.log(`Please Fill the Database first`)
// 		process.exit(1)
// 	}
// 	console.log(`PhoneBook :`)

// 	PhoneBook.find({}).then(result => {
// 		console.log(result)
// 		result.forEach(record => {
// 			console.log(record.name + ' ' + record.phoneNumber)
// 		})
// 		mongoose.connection.close()
// 		process.exit(1)
// 	})
	
	
// }

// else {

// 	const Name = process.argv[3]
// 	const PhNo = process.argv[4]
	

// 	const record = new PhoneBook({
// 		name : Name,
// 		phoneNumber : PhNo
// 	})

// 	record.save().then(result => {
// 		console.log(`added ${Name} number ${PhNo} to PhoneBook`)
// 		mongoose.connection.close()
// 	})
// }

const mongoose = require('mongoose')

if(process.argv.length < 3) {
	console.log('Please Provide Password as an argument: node mongo.js password')
	process.exit(1)
}

const password = process.argv[2]

//establish connection to database
const url = `mongodb+srv://Shreyansh:${password}@cluster0.qjwd7.mongodb.net/notes-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

// first define a schema for the db
const noteSchema = new mongoose.Schema({
	content : String,
	date : Date,
	important : Boolean,
})

// use schema definition by converting moteSchema into model to work with
//collection created
// collection name : notes (plural of 'Note' with 'N' in lowercase)
const Note = mongoose.model('Note', noteSchema)

// add document to collection
const note = new Note ({
	content : 'React + Node.JS + MongoDB is good tech Stack',
	date : Date(),
	important : true,
})

note.save().then(result => {
	console.log('Note Saved!')
	mongoose.connection.close()
})

// Note.find({}).then(result => {
// 	result.forEach(note => {
// 		console.log(note)
// 	})
// 	mongoose.connection.close()
// })