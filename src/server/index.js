var path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))
dotenv.config();
app.use(express.static('dist'))

console.log(__dirname)

console.log(`My API Key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('api fetcher listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
