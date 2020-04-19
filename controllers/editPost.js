const BlogPost = require('../models/blogpost')
const path = require('path')

module.exports = async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id)
    res.render('index')
}
