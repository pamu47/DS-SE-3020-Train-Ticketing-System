const express = require('express')
const users = express.Router()
const cors = require("cors")
const webtoken = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'


users.post('/signup', (req,res) => {
    const userData = {
        fullName : req.body.full_name,
        email : req.body.email,
        userName : req.body.username,
        password : req.body.password
    }

    User.findOne({
        email : req.body.email
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err,hash) => {
                userData.password = hash
                User.create(userData)
                    .then(user => {
                        res.json({status : user.email +'user registered'})
                    })
                    .catch(err => {
                        res.send('error' +err)
                    })
            })
        }else{
            res.json({error : 'User already exists in the system'})
        }
    })
    .catch(err => {
        res.send('error: '+err)
    })

})

users.post('/signin', (req,res) => {
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                const payload = {
                    _id : user.id,
                    full_name: user.full_name,
                    email: user.email,
                    username:user.username,
                    
                }
                let token = webtoken.sign(payload, process.env.SECRET_KEY, {
                    expiresIn:1140
                })
                res.send(token)
            }else{
                res.json({error: "User does not exists"})
            }
        }else{
            res.json({error: "user does not exists"})
        }
    })
    .catch(err => {
        res.send("Error: "+err)
    })
})

module.exports = users