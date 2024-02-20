const express = require("express")
const loginRequired = require("../middleware/loginRequired")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")

router.put('/updateSettings', loginRequired, (req, res) => {
    User.findByIdAndUpdate(
      req.user._id,
      { $set: { 
        name: req.body.name,
        username: req.body.username, 
        email: req.body.email,
      }},
      { new: true }
    )
    .exec() // Use exec() to execute the query
    .then(result => {
    res.json(result);
    })
    .catch(err => {
    res.status(422).json({ error: "updates cannot post" });
    });
});

module.exports = router