const express = require('express')
const reservations = express.Router()

const Booking = require('../models/Reservation')

//Setting up twilio for sending a text when a reservation occurs
const accountSid = 'replace with Account Sid';
const authToken = ' replace with your Auth token';
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
            const msg = 'Your reservation from '+bookingData.from+' to '+bookingData.to+' has been successfully made.Thank you'
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