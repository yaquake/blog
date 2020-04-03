const BlogPost = require('../models/blogpost')
const path = require('path')

module.exports = async (req, res) => {
    // TODO: handle image validation error
    let image = req.files.image
	image.mv(path.resolve(__dirname, '..',  'public/img', image.name), async (error) => {
		await BlogPost.create({
			...req.body,
			image: '/img/' + image.name,
            userid: req.session.userId
        }, (error, post) => {
            
                if (error) {
                    
                    
                    const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                    req.flash('validationErrors', validationErrors)
                    req.flash('data', req.body)
                    return res.redirect('/posts/create')
                }
            
            
            })
			
		res.redirect('/')
			
		
	})
	
}
