const BlogPost = require('../models/blogpost')

module.exports = async (req, res) => {
    // await BlogPost.deleteOne({'_id': req.params.id}, (error) => {
    //     console.log(error)})
    const postId = req.params.id
    const blogpost = await BlogPost.findById(postId)
    res.render('delete', {
        blogpost
    })
}
