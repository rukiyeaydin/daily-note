const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 5000
const { MONGOURI }= require('./keys')

mongoose.connect(MONGOURI)
mongoose.connection.on('connected', () => {
    console.log("connected to mongo");
})
mongoose.connection.on('error', (err) => {
    console.log("connecting error to mongo", err);
})

app.listen(PORT, () => {
    console.log("server is running");
})