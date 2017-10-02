var express = require('express');
var contact = require('./routers/ContactRouter');
var login = require('./routers/loginroutes');
var register = require('./routers/loginroutes');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var path = __dirname;
var port = 8081;

app.use(express.static(path));
app.get('/', function(req, res) {
    res.sendFile(path + '/index.html');
});
//route to handle user registration
router.post('/contact',contact.contact);
//route to handle Admin Login 
router.post('/login',login.login);
//route to handle Admin Registration 
router.post('/register',register.register);
//Forwarding for the Admin.html page
app.get('/admin', function(req, res) {
    res.sendFile(path + '/admin.html');
});
app.use('/routers', router);

app.listen(port);