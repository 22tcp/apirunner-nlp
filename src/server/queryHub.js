
const express = require('express')
const router = express.Router()
const util = require('util')

// all subsequent routes here below entrypoint /sentiment


/* const _callHandler = async ( text, key ) => {

    const _apirequest = new FormData()
    _apirequest.append("key", key )
    _apirequest.append("txt", text)
    _apirequest.append("lang", "en")

    const _APICall = {
        method: "POST",
        redirect: "follow",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: _apirequest
    }
    return await fetch("https://api.meaningcloud.com/sentiment-2.1", _APICall )
    .catch ( error => { alert("error in api fetch:", error)})
    //console.log("APIREQ:", _apirequest , "\n")
    // console.dir("APICALL:" + util.inspect(_APICall, {showHidden: true, depth: null } ) )
}  */

router.post("/submit", function (req,res) {
    let _data = req.body
    req.session.nlptext = _data.txt
    res.status(202).send( { message : "OK" } )
})

router.get("/get",  function (req,res) {         
        let _results = JSON.stringify({ txt: req.session.nlptext })
        const _apirequest = new FormData()
        _apirequest.append("key", process.env.API_KEY  )
        _apirequest.append("txt", _results )
        _apirequest.append("lang", "en")
    
        const _APICall = {
            method: "POST",
            redirect: "follow",
            body: _apirequest
        }
        //console.dir("APICALL:" + util.inspect(_APICall, {showHidden: true, depth: null } ) )
        //await _callHandler( req.session.nlptext, process.env.API_KEY )
        if ( _APICall ) {
            const response =  fetch("https://api.meaningcloud.com/sentiment-2.1", _APICall )
            .then (response => response.json())
            //.then ( json => { console.log(JSON.stringify(json)) })
            .then( json => { 
                res.json( json )
                res.end()
            })
        }
})


module.exports = router

