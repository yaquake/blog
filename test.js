const connection = require('./connection')

const BlogPost = require('./models/blogpost')

//BlogPost.create({
//	title: 'Hello world',
//	body: 'This is my first message' 
//}, (error, blogpost) => {
//	console.log(error, blogpost)
//})
	
var id = '5e830c60867ced7767fb9642'

BlogPost.findByIdAndUpdate(id, {title: 'Updated Hello world'},  (error, blogpost) => {
	console.log(error, blogpost)
})
