// const blogsRouter = require('express').Router()
// const Blog = require('../models/blog')

// blogsRouter.get('/', (request, response) => {
// 	Blog
//     .find({})
//     .then(blogs => {
//     	// console.log(blogs)
//       response.json(blogs)
//     })
// })

// blogsRouter.post('/', (request, response, next) => {
// 	const body = request.body

// 	const blog = new Blog({
// 		title: body.title,
// 		author: body.author,
// 		url: body.url,
// 		likes: body.likes
// 	})

// 	blog
//     .save()
//     .then(result => {
//     	// console.log(result)
//       response.status(201).json(result)
//     })
//     .catch(error => next(error))	
// })

// module.exports = blogsRouter

const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user')
    response.json(blogs)
})

blogsRouter.post('/', async (request, response, next) => {
    const body = request.body
    const token = request.token
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    // console.log(decodedToken)

    // if (!request.token || !decodedToken.id) {
    //     return response.status(401).json({ error: 'token missing or invalid' })
    // }
    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
        user : user.id
    })

    const savedBlog = await blog.save()
    // append the list of blogs written
    // by one user
    console.log(savedBlog)
    console.log(user.blogs)
    user.blogs = user.blogs.concat(savedBlog._id)
     
    await user.save()

    response.status(201).json(savedBlog)   
})

blogsRouter.delete('/:id', async (request, response, next) => {
    const token = request.token
    const decodedToken = jwt.verify(token, process.env.SECRET)

    const blog = await Blog.findById(request.params.id).populate('user')

    const user = await User.findById(decodedToken.id)
    if(blog.user._id.toString() === user.id.toString() ) {
        await Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()
    }
    else {
        return response.status(401).json({error: 'Unauthorized'})
    }
})

module.exports = blogsRouter