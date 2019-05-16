const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReservationSchema = new Schema({
    full_name : {
        type : String
    },
    email : {
        type : String
    },
    tel_no : {
        type : String
    },
    from : {
        type : String
    },
    to : {
        type : String
    },
    nic : {
        type : String
    }
})

module.exports = Booking = mongoose.model('reservations', ReservationSchema)