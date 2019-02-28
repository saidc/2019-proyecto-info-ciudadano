var express = require('express');
var path = require("path");
var app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: path.join(__dirname,"./vistas")});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
