var express = require('express');
var http = require('http');
//var res = require('response');
var req = require('request');
//var Route = require();
var app = express();
var router = express.Router();
//var router = express.Router();
//var register = require('./routers/loginroutes');
var path = __dirname;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/MyDB";
exports.login = function(req,res){
	var today = new Date();
	var email = req.body.email
	console.log("password:", email);
	/*var email = req.body.email,
	var description = req.body.desc,*/
    
  }
  
exports.register = function(req,res){
var username = req.body.username
var contactnm = req.body.contactnm
var email = req.body.email
var password = req.body.password
console.log(username);
console.log(contactnm);
console.log(email);
console.log(password);


MongoClient.connect(url, function(err, db) {
var status =false;
  if (err) throw err;
  var demoregistration = { 
  "_id":"003", "username": username, "contactnm": contactnm, "email": email, "password": password };
 
  db.collection("demoregistration").insertOne(demoregistration, function(err, res) {
    if (err){ 
		throw err;
		}
		else{
			status = true;
			router.redirect('../Pages/Register.html');
			//res.send("Invalid details!");
			console.log("1 document inserted for demoregistration inserted");
		}
 
    db.close();
  });
});
console.log("Registered with the details as:", username, "password as:", password);
}
