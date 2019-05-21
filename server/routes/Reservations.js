const express = require('express')
const reservations = express.Router()

const Booking = require('../models/Reservation')

//Setting up twilio for sending a text when a reservation occurs
const accountSid = 'AC2285c402a8db5262edec637217f0a313';
const authToken = 'bc13f91ff8eec6d701d229cbb4ff1257';
const client = require('twilio')(accountSid, authToken);


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
            //Pre defined message when reservation take place.
            const msg = 'You are one step away from completing reservation '+bookingData.from+' to '+bookingData.to+' .'
            console.log(bookingData.tel_no)
            client.messages
            .create({
               body: msg,
               from: '+12016763615',
               to: bookingData.tel_no
             })
            .then(message => console.log(message.sid));

            res.json({status : from + " to " + to + "train booked"})
        })
        .catch(err => {
            res.send('error' +err)
        })
})

module.exports = reservations