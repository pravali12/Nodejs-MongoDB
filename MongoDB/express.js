var express = require('express')
var app = express()
 
app.get('/login', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)