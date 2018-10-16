const express = require("express");
const request = require('request');

const app = express();

app.use(express.static(__dirname + "/../client/dist"));

//headers for post to factura.com

//Set the headers
const headers = {
    'Content-Type': 'application/json',
    'F-API-KEY': 'JDJ5JDEwJFJvbEFwQjdXNTZXMlJWbUl4MmNlYi5ueG5RNURhZVkvSFladGpZSU5HNk5BM1VVLzBQSkJt',
    'F-SECRET-KEY': 'JDJ5JDEwJE5tZzN0R3JjVWxPZFJFRVd6SzZBYXV5U0VCcTZ3dGhtd3huOVNjbmFXcmZsVzRBUXBwdkZD'
}
//Configure the request

var myinfo = { email: "johnsf3@hotmail.com",
  razons: "testiing",
  rfc: "GOSA850313TA3",
  calle: "Reforma 100",
  numero_exterior: "300",
  codpos: "06600",
  colonia: "La paz",
  estado: "Guerrero",
  ciudad: "Chilpancingo"
};

let options = {
    url: 'http://devfactura.in/api/v1/clients/create',
    method: 'POST',
    headers: headers,
    body : JSON.stringify(myinfo)
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(response.statusCode);
      console.log(JSON.parse(body))
        // Print out the response body
        // console.log('THIS,IS BODY OF',body, headers)
    }
})

//export your app
module.exports = app;
