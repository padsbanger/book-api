var express = require('express');
var mongoose = require('mongoose');


var db = mongoose.connect('mongodb://test:test@ds035310.mongolab.com:35310/mean', function() {
  console.log('connected');
})

var Book = require('./models/bookModel');

var app = express();

var port = process.env.port || 1337;

var bookRouter = express.Router();

bookRouter.route('/Books')
  .get(function(req, res) {

    var query = req.query;

    Book.find(query, function(err, books) {
      res.json(books);
    })

  });

bookRouter.route('/Books/:bookId')
  .get(function(req, res) {
    Book.findById(req.params.bookId, function(err, books) {
      res.json(books);
    })
  })

app.use('/api', bookRouter);

app.get('/', function(req, res) {
  res.send('hello');
});

app.listen(port, function() {
  console.log('working');
});
