const mongoose = require('mongoose')
const schema = mongoose.Schema


const BlogPostSchema = new schema({
	title: {
        type: String,
        required: [true, 'Please provide title']
    },
    subheading: {
        type: String,
        required: [true, 'Please provide subheading']
    },
	body: {
        type: String,
        required: [true, 'Please provide text']
    },
	userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
	datePosted: {
		type: Date,
		default: new Date()
	},
	image: {
        type: String,
        required: [true, 'Please provide image']
    }
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.exports = BlogPost
