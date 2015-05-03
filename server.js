var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer'); 

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post("/facebookauth", function(req, res) {
	console.log("data from facebooklogin=");
	JSON.parse(req.body)
	
	res.status(200).send("ok");
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
