const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TicketSchema = new Schema({
    from : {
        type : String
    },
    to : {
        type : String
    },
    price : {
        type : Number
    }
})

module.exports = Ticket = mongoose.model('tickets', TicketSchema)

