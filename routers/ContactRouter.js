var express = require('express');
var app = express();
var path = __dirname;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/MyDB";
exports.contact = function(req,res){

//res.sendFile('/Pages/Contact',);
var subject = req.body.subject;
var email = req.body.email;
var description = req.body.desc;
//console.log("Subject:"+subject);
//console.log("Email:"+email);
//console.log("Description:"+description);
//Connecting with DB
MongoClient.connect(url, function(err, db) {
var status =false;
  if (err) throw err;
  var contactMeUsersObj = { 
  subject: subject, email: email, description: description };
 
  db.collection("contactMeUsers").insertOne(contactMeUsersObj, function(err, res) {
    if (err){ 
		throw err;
		}
		else{
			status = true;
			//res.sendFile(path + '/Pages/Success.html');
			console.log("1 document inserted");
		}
    //console.log("1 document inserted");
    db.close();
  });
});
	
}