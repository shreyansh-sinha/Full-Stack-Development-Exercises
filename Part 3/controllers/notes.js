// const notesRouter = require('express').Router()
// const Note = require('../models/note')

// notesRouter.get('/', (request, response) => {
// 	Note.find({}).then(notes => {
// 		response.json(notes)
// 	})
// })

// notesRouter.get('/:id', (request, response, next) => {
// 	Note.findById(request.params.id)
// 	.then(note => {
// 		if(note) {
// 			response.json(note)
// 		}
// 		else {
// 			response.status(404).end()
// 		}
// 	})
// 	.catch(error => next(error))
// })

// notesRouter.post('/', (request, response, next) => {
// 	const body = request.body

// 	const note = new Note({
// 		content: body.content,
// 		important: body.important || false,
// 		date: new Date()
// 	})

// 	note.save().then(savedNote => {
// 		response.json(savedNote)
// 	})
// 	.catch(error => next(error))
// })

// notesRouter.delete('/:id', (request, response, next) => {
//   Note.findByIdAndRemove(request.params.id)
//     .then(() => {
//       response.status(204).end()
//     })
//     .catch(error => next(error))
// })

// notesRouter.put('/:id', (request, response, next) => {
//   const body = request.body

//   const note = {
//     content: body.content,
//     important: body.important,
//   }

//   Note.findByIdAndUpdate(request.params.id, note, { new: true })
//     .then(updatedNote => {
//       response.json(updatedNote)
//     })
//     .catch(error => next(error))
// })

// module.exports = notesRouter

// const notesRouter = require('express').Router()
// const Note = require('../models/note')
// const User = require('../models/user')

// notesRouter.get('/', async (request, response) => {
// 	const notes = await Note.find({}).populate('user')
// 	response.json(notes)
// })

// notesRouter.get('/:id', async (request, response, next) => {
// 	const note = await Note.findById(request.params.id)
// 	if(note)
// 		response.json(note)
// 	else 
// 		response.status(404).end()
// })

// notesRouter.post('/', async (request, response, next) => {
//   const body = request.body

//   const user = await User.findById(body.userId)
//   // console.log(user)
//   const note = new Note({
//     content: body.content,
//     important: body.important === undefined ? false : body.important,
//     date: new Date(),
//     user: user._id
//   })

//   const savedNote = await note.save()
//   user.notes = user.notes.concat(savedNote._id)
//   await user.save()
  
//   response.json(savedNote)
// })

// notesRouter.delete('/:id', async (request, response, next) => {
// 	await Note.findByIdAndRemove(request.params.id)
// 	response.status(204).end()
// })

// notesRouter.put('/:id', async (request, response, next) => {
//   const body = request.body

//   const note = {
//     content: body.content,
//     important: body.important,
//   }

//   await Note.findByIdAndUpdate(request.params.id, note, { new: true })
//     .then(updatedNote => {
//       response.json(updatedNote)
//     })
//     .catch(error => next(error))
// })

// // notesRouter.put('/:id', async (request, response, next) => {
// //   const body = request.body

// //   const note = {
// //     content: body.content,
// //     important: body.important,
// //   }

// //   await Note.findByIdAndUpdate(request.params.id, note, { new: true })
// //   response.json(updatedNote)
// // })

// module.exports = notesRouter

const notesRouter = require('express').Router()
const Note = require('../models/note')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

notesRouter.get('/', async (request, response) => {
	const notes = await Note.find({}).populate('user')
	response.json(notes)
})

notesRouter.get('/:id', async (request, response, next) => {
	const note = await Note.findById(request.params.id)
	if(note)
		response.json(note)
	else 
		response.status(404).end()
})

const getTokenFrom = (req) => {
	const authorization = req.get('authorization')
	if(authorization && authorization.toLowerCase().startsWith('bearer ')) {
		return authorization.substring(7)
	}
	return null
}

notesRouter.post('/', async (request, response, next) => {
  const body = request.body
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if(!token || !decodedToken.id) {
  	return response.status(401).json({error: 'token missing or invalid'})
  }
  const user = await User.findById(decodedToken.id)
  // console.log(user)
  const note = new Note({
    content: body.content,
    important: body.important === undefined ? false : body.important,
    date: new Date(),
    user: user._id
  })

  const savedNote = await note.save()
  user.notes = user.notes.concat(savedNote._id)
  await user.save()
  
  response.json(savedNote)
})

notesRouter.delete('/:id', async (request, response, next) => {
	await Note.findByIdAndRemove(request.params.id)
	response.status(204).end()
})

notesRouter.put('/:id', async (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important,
  }

  await Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

module.exports = notesRouter