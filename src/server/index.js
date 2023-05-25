var path = require('path')
const dotenv = require('dotenv').config();
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const queryHub = require('./queryHub.js')
const app = express()

// Endpoint data reservoir
hubData = {
    "version": "1.0",
    "txt": "empty",
    "apikey": process.env.API_KEY,
    "lang": "en"
}

console.log(hubData)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(express.static('dist'))


//code separation for the local and remote API calls
app.use("/sentiment" , queryHub)
console.log(__dirname)

console.log(`My API Key is ${process.env.API_KEY}`);

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('api fetcher listening on port 8080!')
})

module.exports.hubData

