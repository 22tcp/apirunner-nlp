/**
 * @jest-environment jsdom
 */

'use strict'

const fs = require('fs');
window.document.body.innerHTML = fs.readFileSync("src/client/views/index.html");
import fetchMock from "jest-fetch-mock";
import { queryWeb } from "../queryWeb";
global.fetch = fetchMock;
 
describe("catching the fetch", () => {

    beforeEach(() => { 
        fetchMock.mockResponseOnce(
            JSON.stringify({  
                "model":"general_en",
                "score_tag":"P+",
                "agreement":"AGREEMENT",
                "subjectivity":"OBJECTIVE",
                "confidence":"100",
                "irony":"NONIRONIC",
                "sentence_list": [ 
                    {
                        "text":"The restaurant was great even though it’s not near Madrid.",
                        "inip":"0",
                        "endp":"57",
                        "bop":"y",
                        "confidence":"100",
                        "score_tag":"P+",
                        "agreement":"AGREEMENT"
                    }
                ]
              })
        )
      }) 


    it("Tests the queryWeb() function", async () => {
         window.alert = () => {};
         const data = await queryWeb( '/sentiment/get' )
         const jsonData = await data.json()
         console.log( jsonData )
         expect(data).toBeDefined();
         expect(JSON.stringify(jsonData)).toMatch(/AGREEMENT/);
    })
})

