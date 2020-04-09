const Blogpost = require('../models/blogpost.js')
const User = require('../models/user')

module.exports = async (req, res) => {
    const user = await User.findOne({username: req.params.name})
    if (user != null) {
        const blogposts = await Blogpost.find({userid: user._id}).populate('userid')
        res.render('allposts', { blogposts })
    } else {
        res.redirect('/404')
    }

}
