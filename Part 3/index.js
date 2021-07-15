// const express = require('express')
// const app = express()
// app.use(express.json())
// const morgan = require('morgan')

// const cors = require('cors')

// app.use(cors())

// app.use(express.static('build'))

// let persons = [
// 	{
// 		id: 1,
// 		name: "Arto Hellas",
// 		number : "040-123456"
// 	},
// 	{
// 		id: 2,
// 		name: "Ada Lovelace",
// 		number: "39-44-5323523"
// 	},
// 	{
// 		id: 3,
// 		name: "Dan Abramov",
// 		number: "12-43-234345"
// 	},
// 	{
// 		id : 4,
// 		name: "Mary Poppendick",
// 		number: "39-23-6423122"
// 	}
// ]

// app.use(morgan('tiny'))

// app.get('/api/persons', (request, response) => {
// 	response.json(persons)
// })

// app.get('/info', (request, response) => {
// 	const requests = persons.length
	
// 	var date = new Date()
// 	var time = date.getTime()
// 	var day = date.getDay()
// 	console.log(day)
// 	response.write(
// 			`<p> Phonebook has info for ${requests} people </p>`
// 			)
// 	response.write(`<p> ${day} ${date} ${time} </p>`)
// 	response.end()
// })

// app.get('/api/persons/:id', (request, response) => {
// 	const id = Number(request.params.id)

// 	const person = persons.find(p => p.id === id)

// 	if(!person)
// 		response.status(404).end()
// 	else
// 		response.json(person)

// })

// app.delete('/api/persons/:id', (request, response) => {

// 	const id = Number(request.params.id)

// 	persons = persons.filter(p => p.id !== id)

// 	response.status(204).end()
// })

// const generateId = () => {
// 	const MaxId = persons.length > 0 ? Math.max(...persons.map(p => p.id)) : 0

// 	return MaxId + 1
// }

// const check = (name) => {
// 	let res = false
// 	for(let i=0;i<persons.length;i++) {
// 		if(persons[i].name === name)
// 			res = true
// 	}

// 	return res;
// }
// app.post('/api/persons', (request, response) => {

// 	const body = request.body
// 	console.log(body)

// 	if(!body.name) {
// 		return response.status(400).json({
// 			error : "name missing"
// 		})
// 	}

// 	else if(!body.number) {
// 		return response.status(400).json({
// 			error : "number missing"
// 		})
// 	}

// 	else if(check(body.name) === true) {
// 		return response.status(400).json({
// 			error : "name already exists"
// 		})
// 	}
// 	const person = {
// 		name : body.name,
// 		number : body.number,
// 		id : generateId(),
// 	}

// 	persons = persons.concat(person)

// 	response.json(person)

// })

// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
// const PORT = process.env.PORT || 3001
// app.listen(PORT, () => {
// 	console.log(`Server running on port ${PORT}`)
// })


// const express = require('express')
// const app = express()
// app.use(express.json())
// const morgan = require('morgan')

// const cors = require('cors')

// let notes = [
// 	{
// 		"id": 1,
// 		"content": "HTML is Easy",
// 		"important": true
// 	}
// ]

// app.use(cors())

// app.use(express.static('build'))

// app.use(morgan('tiny'))

// app.get('/api/notes', (request, response) => {

// 	response.json(notes)
	
// })

// app.get('/info', (request, response) => {
// 	const requests = notes.length
	
// 	var date = new Date()
// 	var time = date.getTime()
// 	var day = date.getDay()

// 	response.write(
// 			`<p> There are ${requests} notes </p>`
// 			)
// 	response.write(`<p> ${day} ${date} ${time} </p>`)
// 	response.end()
// })

// app.get('/api/notes/:id', (request, response) => {
// 	const id = Number(request.params.id)

// 	const note = notes.find(p => p.id === id)

// 	if(!note)
// 		response.status(404).end()
// 	else
// 		response.json(note)

// })

// app.delete('/api/notes/:id', (request, response) => {

// 	const id = Number(request.params.id)

// 	notes = notes.filter(p => p.id !== id)

// 	response.status(204).end()
// })

// const generateId = () => {
// 	const MaxId = notes.length > 0 ? Math.max(...notes.map(p => p.id)) : 0

// 	return MaxId + 1
// }

// app.post('/api/notes', (request, response) => {

// 	const body = request.body
// 	console.log(body)

// 	if(!body.content) {
// 		return response.status(400).json({
// 			error : "content missing"
// 		})
// 	}

// 	const note = {
// 		content : body.content,
// 		important : body.important,
// 		date : body.date,
// 		id : generateId(),
// 	}

// 	notes = notes.concat(note)

// 	response.json(note)

// })

// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
// const PORT = 3001
// app.listen(PORT, () => {
// 	console.log(`Server running on port ${PORT}`)
// })

// require('dotenv').config()
// const express = require('express')
// const app = express()
// app.use(express.static('build'))
// const Note = require('./models/note')

// app.use(express.json())
// const morgan = require('morgan')

// const cors = require('cors')

// app.use(cors())


// app.use(morgan('tiny'))

// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// app.get('/api/notes', (request, response) => {

//   Note.find({}).then(notes => {
//     response.json(notes)
//   })
  
// })

// app.post('/api/notes', (request, response) => {
// 	const body = request.body

// 	if(body.content === undefined) {
// 		return response.status(400).json({error : 'content-missing'})
// 	}

// 	const note = new Note({
// 		content : body.content,
// 		important: body.important,
// 		date : new Date()
// 	})

// 	note.save().then(savedNote => {
// 		response.json(savedNote)
// 	})
// })

// app.get('/api/notes/:id', (request, response) => {
// 	Note.findById(request.params.id).then(note => {
// 		response.json(note)
// 	})
// })

// app.put('/api/notes/:id', (request, response) => {
// 	const body = request.body
// 	const note = {
// 		content: body.content,
// 		important: body.important,
// 	}

// 	Note.findByIdAndUpdate(request.params.id, note, {new: true})
// 	.then(updatednote => {
// 		response.json(updatednote)
// 	})
// 	.catch(error => {
// 		console.log(error)
// 		response.status(400).end({error: 'error in updation'})
// 	})
// })

// const PORT = process.env.PORT
// app.listen(PORT, () => {
// 	console.log(`Server running on port ${PORT}`)
// })

// require('dotenv').config()
// const express = require('express')
// const app = express()
// app.use(express.static('build'))
// const Phonebook = require('./models/person')

// app.use(express.json())
// const morgan = require('morgan')

// const cors = require('cors')

// app.use(cors())

// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// app.get('/api/persons', (request, response) => {
// 	Phonebook.find({}).then(person => {
// 		response.json(person)
// 	})
// })

// app.post('/api/persons', (request, response, next) => {
// 	const body = request.body
// 	// console.log(body)
// 	if(body.name === undefined || body.phoneNumber === undefined) {
// 		response.status(400).send({error: 'data-missing'})
// 	}

// 	const person = new Phonebook({
// 		name: body.name,
// 		phoneNumber: body.phoneNumber
// 	})

// 	person.save().then(savedperson => {
// 		response.json(savedperson)
// 	})
// 	.catch(error => {
// 		// console.log(error)
// 		next(error)
// 	})
// })

// app.get('/api/persons/:id', (request, response) => {
// 	Phonebook.findById(request.params.id).then(record => {
// 		if(!record) {
// 			response.status(404).end()
// 		}
// 		else {
// 			response.json(record)
// 		}
// 	})
// 	.catch(err => {
// 		console.log(err)
// 		response.status(400).json({error: 'malformatted-id'})
// 	})
// })

// app.delete('/api/persons/:id', (request, response) => {
// 	Phonebook.findByIdAndRemove(request.params.id).then(() => 
// 		response.status(204).end())
// 		.catch(err => {
// 			console.log(err)
// 			response.status(400).send({error: 'error in deleting'})
// 		})
// })

// app.put('/api/persons/:id', (request, response) => {
// 	const body = request.body
// 	console.log(body)
// 	if(body.name === undefined || body.phoneNumber === undefined) {
// 		response.status(400).send({error: 'missing-data'})
// 	}

// 	const record = {
// 		name : body.name,
// 		phoneNumber : body.phoneNumber,
// 	}

// 	Phonebook.findByIdAndUpdate(request.params.id, record, {new: true})
// 	.then(updatedRecord => {
// 		// console.log(updatedRecord)
// 		response.json(updatedRecord)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 		response.status(400).send({error: 'error-occured'})
// 	})
// })

// app.get('/info', (request, response) => {

// 	Phonebook.countDocuments({}).then((count) => {
// 		const requests = `<p> Phonebook has info for ${count} people </p> 
// 		<p> ${new Date()} </p>`
// 		response.send(requests)
// 	})
// })

// const errorHandler = (error, request, response, next) => {
// 	console.error(error.message)

// 	if (error.name === 'ValidationError') {

//     	return response.status(400).json({ error : error.message })
//   	}

//   	return next(error)
// }

// app.use(errorHandler)
// const PORT = process.env.PORT
// app.listen(PORT, () => {
// 	console.log(`Server running on port ${PORT}`)
// })

// require('dotenv').config()
// const express = require('express')
// const app = express()
// app.use(express.static('build'))
// const Note = require('./models/note')

// app.use(express.json())
// const morgan = require('morgan')

// const cors = require('cors')

// app.use(cors())


// app.use(morgan('tiny'))

// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// app.get('/api/notes', (request, response) => {

//   Note.find({}).then(notes => {
//     response.json(notes)
//   })
  
// })

// app.post('/api/notes', (request, response) => {
// 	const body = request.body

// 	if(body.content === undefined) {
// 		return response.status(400).json({error : 'content-missing'})
// 	}

// 	const note = new Note({
// 		content : body.content,
// 		important: body.important,
// 		date : new Date()
// 	})

// 	note.save().then(savedNote => {
// 		response.json(savedNote)
// 	})
// 	.catch(error => {
// 		console.log(error)
// 		response.status(400).send({error: 'validation-error'})
// 	})
// })

// app.get('/info', (request, response) => {
// 	Note.countDocuments({}).then((count) => {
// 		const res = `<p> There are ${count} notes </p> 
// 		<p> ${new Date()} </p>`
// 		response.send(res)
// 	})
// })

// app.get('/api/notes/:id', (request, response) => {
// 	Note.findById(request.params.id).then(note => {
// 		response.json(note)
// 	})
// })

// app.put('/api/notes/:id', (request, response) => {
// 	const body = request.body
// 	const note = {
// 		content: body.content,
// 		important: body.important,
// 	}

// 	Note.findByIdAndUpdate(request.params.id, note, {new: true})
// 	.then(updatednote => {
// 		response.json(updatednote)
// 	})
// 	.catch(error => {
// 		console.log(error)
// 		response.status(400).end({error: 'error in updation'})
// 	})
// })

// const PORT = process.env.PORT
// app.listen(PORT, () => {
// 	console.log(`Server running on port ${PORT}`)
// })

const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

server.listen(config.PORT, () => {
	logger.info(`Server running on ${config.PORT}`)
})