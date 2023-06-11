const fetchMock = require("fetch-mock")

fetch = fetchMock.sandbox()
module.exports = fetch
