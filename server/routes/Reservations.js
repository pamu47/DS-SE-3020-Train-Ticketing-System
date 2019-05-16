const express = require('express')
const reservations = express.Router()

const Booking = require('../models/Reservation')


reservations.post('/', (req,res) => {
    const bookingData = {
        full_name : req.body.full_name,
        email : req.body.email,
        tel_no : req.body.tel_no,
        from : req.body.from,
        to : req.body.to,
        nic : req.body.nic
    }

    Booking.create(bookingData)
        .then(user => {
            res.json({status : from + " to " + to + "train booked"})
        })
        .catch(err => {
            res.send('error' +err)
        })
})

module.exports = reservations