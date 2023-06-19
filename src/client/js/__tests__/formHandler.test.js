/**
 * @jest-environment jsdom
 */

'use strict'
// create jsdom
const fs = require('fs');
window.document.body.innerHTML = fs.readFileSync("src/client/views/index.html");

import fetchMock from "jest-fetch-mock";
import { handleSubmit } from "../formHandler";

global.fetch = fetchMock;

 
describe("Testing the submit functionality", () => {
    
    it("Tests the form function",  async () => {
        fetch.mockResponses(
            [
                JSON.stringify({ body: 'ok' }),
                { status: 200 }
              ],
            [
                JSON.stringify(
                    {  
                        "model":"general_en",
                        "score_tag":"P+",
                        "agreement":"AGREEMENT",
                        "subjectivity":"OBJECTIVE",
                        "confidence":"100",
                        "irony":"NONIRONIC",
                        "sentence_list": [ 
                            {
                                "text":"The restaurant was great even though it’s not near Gallifrey.",
                                "inip":"0",
                                "endp":"57",
                                "bop":"y",
                                "confidence":"100",
                                "score_tag":"P+",
                                "agreement":"AGREEMENT"
                            }
                        ]
                    }
                ),
                { status: 200 }
            ]
        )
        window.alert = () => {};
        await handleSubmit({ preventDefault: () => {}});
        expect(handleSubmit).toBeDefined();
        expect(fetchMock).toHaveBeenCalledTimes(2);
        expect(document.getElementById('irony').innerHTML).toBe('NONIRONIC');
    })
})