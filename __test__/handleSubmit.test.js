/**
 * @jest-environment jsdom
 */

'use strict'

//jest.mock('../src/client/js/formHandler')

import { handleSubmit } from "../src/client/js/formHandler"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
            document.body.innerHTML = '<textarea id="newsarticle">The Parliamentarians were outnumbered, '+
                                      'having around 1,500 men under the command of Sir Thomas Fairfax,' +
                                      'compared to the 3,000 led by George Goring in Wakefield.</textarea>' +
                                      '<div id="subjectivity">-</div>' +
                                      '<div id="agreement">->/div>' +
                                      '<div id="irony">-</div>'
          

          // Define the input for the function, if any, in the form of variables/array
          // Define the expected output, if any, in the form of variables/array
          // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
          // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
          expect(handleSubmit).toBeDefined();
    })});