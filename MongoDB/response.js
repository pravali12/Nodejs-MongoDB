var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { _id: 201, name: 'Mounika'},
    { _id: 202, name: 'Nirosha'},
    { _id: 203, name: 'Gayathri'}
  ];
  db.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});