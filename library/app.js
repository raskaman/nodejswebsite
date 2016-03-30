var express = require('express');

var app = express();

app.use(express.static('public'));

app.use(express.static('src/views'));

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/books', function(req, res){
    res.send('Hello Books 2');
});

app.listen(process.env.PORT, process.env.IP, function(err){
    console.log('running server on port ' + process.env.PORT);
});