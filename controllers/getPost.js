const BlogPost = require('../models/blogpost')

module.exports = async (req, res) => {
	const blogposts = await BlogPost.findById(req.params.id).populate('userid')
	res.render('post', { blogposts })
}
