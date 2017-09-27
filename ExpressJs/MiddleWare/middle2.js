var express = require('express');
var app = express();

//Step 1

/*app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next()
});

app.get('/user/:id', function (req, res, next) {
	console.log('USER');
  res.send('USER');
});*/


//Step 2

/*app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
  res.send('User Info');
})

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id);
})*/

app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.sendFile(__dirname+'/res.html');
});

// handler for the /user/:id path, which renders a special page
app.get('/user/:id', function (req, res, next) {
  res.sendFile(__dirname+'/special.html');
});

app.listen(3000);
console.log("server running at port 3000");