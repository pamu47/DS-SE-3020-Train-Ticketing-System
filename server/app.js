const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended : false
    })
)

const mongoURI = 'mongodb://localhost:27017/ticketingsystem'

mongoose.connect(mongoURI, {useNewUrlParser : true})
        .then(()=> console.log("Database connection success"))
        .catch(err => console.log('Error while connecting to mongodb : '+err))

const Users = require('./routes/Users')

//Routes
app.use('/users',Users)

app.listen(port, ()=> {
    console.log("Server running on port "+port)
})
