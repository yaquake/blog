const BlogPost = require('../models/blogpost')

module.exports = async (req, res) => {
    await BlogPost.deleteOne({'_id': req.params.id}, (error) => {
        console.log(error)
    })


    res.redirect('/')
}
