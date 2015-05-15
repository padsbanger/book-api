var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Book = require('./models/bookModel');

var db = mongoose.connect('mongodb://test:test@ds035310.mongolab.com:35310/mean', function(err) {
  if (!err) {
    console.log('connected');
  }
})

var app = express();

var port = process.env.port || 1337;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

bookRouter = require('./routes/bookRoutes')(Book);


app.use('/api/books', bookRouter);

app.get('/', function(req, res) {
  res.send('hello');
});

app.listen(port, function() {
  console.log('working');
});
