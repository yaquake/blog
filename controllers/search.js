const BlogPost = require('../models/blogpost')

module.exports = async (req, res) => {
    const blogposts = await BlogPost.find({title: {$regex: req.body.search, $options: 'i'}}).sort({datePosted: -1}).populate('userid')
		
		res.render('index', { blogposts }) }
	
