const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const {PORT} = process.env
const sse = require('./api/sse.js')
const secret = require('./api/ahah.js')
//(potentially) git tutorial page
//homepage + countdown
//set up server events
//have a countdown

app.get('/event-source', sse)
app.get('/test-secret', secret)
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'www/pages/home.html'))
})

app.use(express.static(path.join(__dirname, 'www')))

app.listen(PORT, ()=> {
    console.log(`Countdown runnin\' on only the finest port, #${PORT}`)
})