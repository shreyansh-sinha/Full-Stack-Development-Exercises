// const config = require('./utils/config')
// const express = require('express')
// require('express-async-errors')
// const app = express()
// const cors = require('cors')
// const notesRouter = require('./controllers/notes')
// const middleware = require('./utils/middleware')
// const logger = require('./utils/logger')
// const mongoose = require('mongoose')

// logger.info('connecting to', config.MONGODB_URI)

// mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
// 	.then(() => {
//     logger.info('connected to MongoDB')
//   	})
//   	.catch((error) => {
//     logger.error('error connecting to MongoDB:', error.message)
// })

// app.use(cors())
// app.use(express.static('build'))
// app.use(express.json())
// app.use(middleware.requestLogger)

// //notesRouter middleware
// app.use('/api/notes', notesRouter)

// app.use(middleware.unknownEndpoint)
// app.use(middleware.errorHandler)

// module.exports = app

const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const morgan = require('morgan')

const notesRouter = require('./controllers/notes')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const blogsRouter = require('./controllers/blogs')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
	.then(() => {
    logger.info('connected to MongoDB')
  	})
  	.catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
})

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan('tiny'))
app.use(middleware.requestLogger)
// app.use('/api/notes', notesRouter)

app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)

app.use(middleware.tokenExtractor)
// app.use(middleware.userExtractor)

app.use('/api/blogs', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app