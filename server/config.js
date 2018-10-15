const express = require("express");
const request = require('request');

const app = express();

app.use(express.static(__dirname + "/../client/dist"));

//headers for post to factura.com

// Set the headers
const headers = {
    'Content-Type': 'application/json',
    'F-API-KEY': 'JDJ5JDEwJFJvbEFwQjdXNTZXMlJWbUl4MmNlYi5ueG5RNURhZVkvSFladGpZSU5HNk5BM1VVLzBQSkJt',
    'F-SECRET-KEY': 'JDJ5JDEwJE5tZzN0R3JjVWxPZFJFRVd6SzZBYXV5U0VCcTZ3dGhtd3huOVNjbmFXcmZsVzRBUXBwdkZD'
}
// Configure the request
let options = {
    url: 'https://factura.com/api/v1/clients/create',
    method: 'POST',
    headers: headers
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log('THIS,IS BODY OF',body)
    }
})

//export your app
module.exports = app;
