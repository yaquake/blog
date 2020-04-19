const mongoose = require('mongoose')
require('dotenv').config()

const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-njnty.mongodb.net/my_database`
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(uri, options). catch(error =>  console.log(error))
    
mongoose.set('useCreateIndex', true)

const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Connected to Atlas')
})

connection.on('disconnected', () => {
    console.log('Disconnected from Atlas')
})

connection.on('error', (error) => {
    console.log(error)
})


module.exports = connection
