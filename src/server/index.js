var path = require('path')
const dotenv = require('dotenv').config()
const express = require('express')
const uid = require('uid-safe')
const session = require('express-session')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()


// Endpoint data reservoir
hubData = {
    "version": "1.0",
    "txt": "empty",
    "lang": "en"
}

//console.log(hubData)
app.use(session( {
    secret: process.env.sessionkey,
    resave: false,
    secure: false,
    saveUninitialized: true,
    name: 'apirunner-nlp',
    cookie: { 'sameSite': 'lax', httpOnly: false }
}))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(express.static('dist'))

//code separation for the local and remote API calls
const queryHub = require('./queryHub.js')
app.use("/sentiment" , queryHub)

console.log(__dirname)

console.log(`My API Key is ${process.env.API_KEY}`);

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//keep the browser console clear
app.get('/favicon.ico', (req,res) => {
    res.send('_');
});

app.get('/', function (req, res) {

    res.sendFile(path.resolve('dist/index.html'))
})


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('api fetcher listening on port 8080!')
})

module.exports.hubData
module.exports = app