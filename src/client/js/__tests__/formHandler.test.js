/**
 * @jest-environment jsdom
 */

'use strict'
const fs = require('fs');
window.document.body.innerHTML = fs.readFileSync("src/client/views/index.html");
const fetchMock = require('jest-fetch-mock').enableMocks()
import { handleSubmit } from "../formHandler";

 
describe("Testing the submit functionality", () => {

    

    test("Tests the queryWeb() function",  () => {
        window.alert = () => {};
        handleSubmit({ preventDefault: () => {}});
        expect(handleSubmit).toBeDefined();
        
    })
})