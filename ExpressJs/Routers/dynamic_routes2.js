var express = require('express');
var app = express();

app.get('/things/:name/:id', function(req, res) {
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
app.get('/things', function(req, res) {
   res.send('this is only things url');
});
app.listen(3003);
console.log("server running at port 3003");