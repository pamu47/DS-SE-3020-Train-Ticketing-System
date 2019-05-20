const express = require('express')
const tickets = express.Router()

const AddTicket = require('../models/Ticket')

tickets.post('/add', (req,res) => {
    const ticketData = {
        from : req.body.from,
        to : req.body.to,
        price : req.body.price
    }

    AddTicket.create(ticketData)
            .then(data => {
                res.json({status : data.from+' '+data.to+' ticket added'})
            })
            .catch(err => {
                res.send('error' +err)
            })
})

module.exports = tickets