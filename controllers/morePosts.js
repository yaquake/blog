const BlogPost = require('../models/blogpost')

module.exports = async (req, res) => {
    const blogposts = await BlogPost.find({}).sort({datePosted: -1}).limit(15).skip(5).populate('userid')
    res.render('index', { blogposts, button: "hidden" })
}
