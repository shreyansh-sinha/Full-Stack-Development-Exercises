const dummy = (blogs) => {
	return 1
}

const emptyBlog = (blogs) => {
	return 0
}

const singleBlog = (blogs) => {
	console.log(blogs)
	return blogs.likes
}

const multiBlogs = (blogs) => {
	const likes = blogs.filter(blog => blog.likes)
	const sumOfLikes = likes.reduce(function(a, b) {
	return a+b
	}, 0)
	return sumOfLikes
}

const favouriteBlog = (blogs) => {
	const blog = blogs.reduce(function(prev, current) {
		return (prev.likes > current.likes) ? prev : current
	})
	console.log(blog)
	return blog
}
module.exports = {
	dummy,
	emptyBlog,
	singleBlog,
	multiBlogs,
	favouriteBlog
}