require("dotenv").config()
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../keys')
const loginRequired = require("../middleware/loginRequired")

router.post('/signup', (req, res) => {
    const {name, email, username, password} = req.body;
    // Eğer bu değerler girilmemişse hata gönder
    if (!name || !email || !username || !password) {
        return res.status(422).json({error: "Fill all the blanks, please!"});
    }
    User.findOne({email: email})
    .then((savedUser) => {
        if (savedUser) {
            // Eğer bu erroru alırsa kod devam etmesin diye return koyuldu
            return res.status(422).json({error: "A user already exists with the email!"});
        } else {
            const user = new User({
                name: name,
                username: username,
                email: email,
                password: password,
            });
            user.save()
            .then(user => {
                res.json({message: "Registration successful"});
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({error: "An error occurred during registration"});
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: "An error occurred during registration"});
    });
});


module.exports = router