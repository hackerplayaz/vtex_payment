const express = require("express");
//const querystring = require('querystring');
const request = require('request');

const app = express();

app.use(express.static(__dirname + "/../client/dist"));

//headers for post to factura.com here
req.post({
   url: 'someUrl',
   form: { email: 'user', razons: '', rfc: '', calle: '', numero_exterior: '', codpos: '', colonia: '', estado:'', ciudad:'' },
   headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
      'Content-Type' : 'application/x-www-form-urlencoded'
   },
   method: 'POST'
  },

  function (e, r, body) {
      console.log(body);
  });
//export your app
module.exports = app;
