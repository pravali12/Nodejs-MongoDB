var http=require('http');
var another=require("./another");
http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.write("the value"+another.myfunction());
   // Send the response body as "Hello World"
   response.write(request.url);
   response.end('\nHello World\n');
}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');