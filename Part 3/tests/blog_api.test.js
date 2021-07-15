const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./blog_list_helper')
const api = supertest(app)
const Blog = require('../models/blog')

beforeEach(async() => {
	await Blog.deleteMany({})

	const blogObjects = helper.initialBlogs.map(blog => new Blog(blog))
	const promiseArray = blogObjects.map(blog => blog.save())
	await Promise.all(promiseArray)
})

test('blogs are returned in json', async() => {
	await api.get('/api/blogs')
		.expect(200)
		.expect('Content-Type', /application\/json/)
})

test('number of blog posts are correct', async() => {
	const blogsAtStart = helper.initialBlogs

	const response = await api.get('/api/blogs')
	expect(response.body.length).toEqual(blogsAtStart.length)

})

afterAll(() => {
	mongoose.connection.close()
})