/*var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('../JSFiles/AboutMe.html', 'utf8');
var express = require('express');
var router = express.Router();

var options = { format: 'Letter' };
router.get('/',);
pdf.create(html, options).toFile('./AboutMe.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res); // { filename: '/app/businesscard.pdf' } 
});*/

var express = require('express');
var app = express();

app.get('/Contact', function(err, data){
   res.send(data);
});

app.post('/Contact', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});
app.listen(3000);