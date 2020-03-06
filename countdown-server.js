const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const {PORT} = process.env
const timer = require('./timer.js')

//(potentially) git tutorial page
//homepage + countdown
//set up server events
//have a countdown

app.get('/', (req, res, next) => {
    res.sendFile()
})

app.listen(PORT, ()=> {
    console.log(`Countdown runnin\' on only the finest port, #${PORT}`)
})