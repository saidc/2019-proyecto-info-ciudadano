var express = require('express');
var path = require("path");
var app = express();
app.use(express.static("public"));

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: path.join(__dirname,"./vistas")});
});

app.get('/about', function (req, res) {
  res.sendFile('about.html', {root: path.join(__dirname,"./vistas")});
});

app.get('/contact', function (req, res) {
  res.sendFile('contact.html', {root: path.join(__dirname,"./vistas")});
});

app.get('/findlocation', function (req, res) {
  res.sendFile('findlocation.html', {root: path.join(__dirname,"./vistas")});
});

app.get('/result', function (req, res) {
  res.sendFile('result.html', {root: path.join(__dirname,"./vistas")});
});

app.get('/services', function (req, res) {
  res.sendFile('services.html', {root: path.join(__dirname,"./vistas")});
});

app.get('/singin', function (req, res) {
  res.sendFile('singin.html', {root: path.join(__dirname,"./vistas")});
});

app.get('/singup', function (req, res) {
  res.sendFile('singup.html', {root: path.join(__dirname,"./vistas")});
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
