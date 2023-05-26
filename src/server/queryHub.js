
const express = require('express')
const router = express.Router()

// all subsequent routes here below entrypoint /sentiment



router.post("/submit", function (req,res) {
    let _data = req.body
    req.session.nlptext = _data.txt
    res.status(202).send( { message : "OK" } )
})

router.get("/get", function (req,res) {
    let _results = JSON.stringify({ txt: req.session.nlptext })
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials" : true 
    })
    res.json(  { txt: req.session.nlptext } )
})

module.exports = router



/* const callHandler = ( text, key ) => {

    const apirequest = new FormData()
         apirequest.append("key", key )
         apirequest.append("txt", text)
         apirequest.append("lang", 'en')

    const APIcall = {
        method: 'POST',
        body: apirequest,
        redirect: 'follow'
    }

    console.log("APIREQ:", apirequest , "\n")
    console.log("APICALL:", APIcall )
} */

/* 
const response = fetch("https://api.meaningcloud.com/sentiment-2.1", postData)
.then(response => ({
  status: response.status, 
  body: response.json()
}))
.then(({ status, body }) => {
        console.log(status, body)
        document.getElementById('results').innerHTML = response.body
    }
)

.catch(error => console.log('error', error)); */