const mongoose = require('mongoose')


mongoose.connect('mongodb://blog:blog@localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true})

const connection = mongoose.connection


module.exports = connection
