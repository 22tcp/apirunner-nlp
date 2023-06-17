/**
 * @jest-environment jsdom
 */

'use strict'
const fs = require('fs')
window.document.body.innerHTML = fs.readFileSync("src/client/views/index.html")

import fetchMock from "jest-fetch-mock"
import { handleSubmit } from "../formHandler"

fetchMock.resetMocks()
// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {

/*     beforeAll( () => {
        jest.mock("uploadTxt", async () => {
            return "{ data: { status: 200 } }"
        })
        jest.mock("queryWeb", async () => {
            return "{ data: { status: 200 } }"
        })
    }) */
    
    beforeEach( () => {
        fetchMock.resetMocks()
        fetchMock.doMock()
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
    })

    test("Tests the handleSubmit() function",  async () => {
        await handleSubmit({ preventDefault: () => {}})
        expect(handleSubmit).toBeDefined()
        
        

    })
})