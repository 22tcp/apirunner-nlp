const express = require("express")
const router = express.Router()


// all subsequent routes here below entrypoint /sentiment

router.get("/", function (req,res) {
    res.write("sentiment endpoint " + hubData.version )
    res.write("\ntxt=" + hubData.txt )
    res.write("\nAPIKey=" + hubData.apikey )
    res.end()
})

router.post("/", function (req,res) {
    
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