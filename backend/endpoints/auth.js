require("dotenv").config()
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../keys')
const bcrypt = require("bcryptjs")
const loginRequired = require("../middleware/loginRequired")

router.post('/signup', (req, res) => {
    const {name, username, email, password} = req.body
    // eger bu degerler girilmemise error gonder
    if(!name || !username || !email || !password){
     return res.status(422).json({error: "Fill all the blanks, please!"})
    }
    User.findOne({email: email})
    .then((savedUser) => {
         if(savedUser){
             // eğer bu erroru alırsa kod devam etmesin diye return koyuldu
             return res.status(422).json({error: "Email is already registered!"})
         }
         bcrypt.hash(password, 12)
         .then(hashedpassword => {
             const user = new User({
                 name: name,
                 username: username,
                 email: email,
                 password: hashedpassword,
             })
             user.save()
             .then(user => {
                 res.json({message: "registration is successfull"})
             })
             .catch(error => {
                 console.log(error);
             })
         })
    })
    .catch(err => {
     console.log(err)
    })
 })

router.post('/login', (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        return res.status(422).json({error: "Enter e-mail or password"})
    }
    User.findOne({email: email})
    .then(savedUser => {
        if(!savedUser){
            return res.status(422).json({error: "Invalid e-mail or password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch => {
            if(doMatch){
                // res.json({message: "başarıyla giriş yapıldı"})
                const token = jwt.sign({ _id: savedUser._id}, JWT_SECRET)
                const {_id, name, email, username, password} = savedUser
                res.json({token: token, user: {_id, name, username, email, password}})
            } 
            else{
                return res.status(422).json({error: "Invalid e-mail or password"})
            }
        })
        .catch(err => { console.log(err) })
    })
})



module.exports = router