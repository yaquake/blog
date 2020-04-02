const BlogPost = require('../models/blogpost')

module.exports = async (req, res) => {
	const blogposts = await BlogPost.find({
		
	}).sort({datePosted: -1})
	res.render('index', { blogposts  })
}


