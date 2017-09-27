var express = require('express');
var app = express();
var body=require('body-parser');

var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1:27017/mydb';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;
var userSchema = new Schema({
	username: String,
    email: String
});

var User = mongoose.model('User', userSchema);

app.use(body.json());
app.use(body.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname+'/index.html');
});

app.post("/submit", function (req, res) {
    
    console.log(req.body.username+" "+req.body.email);
     var u = new User({
     	username: req.body.username,
        email: req.body.email
     });
      u.save(function(err) {
        if (err)
           throw err;
        else 
           console.log('save user successfully...');
    });
      User.find({}, function (err, docs) {
        if(err)
        	throw err;
        else
        	console.log(docs);
});
    res.end("Inserted values---->username:"+req.body.username+" email:"+req.body.email);
});

app.listen(3001);
console.log("server running port 3001");