var express = require('express');
var app = express();
var db = require('./dbInteactions');

app.use(express.static('public'));
app.use(express.json());

app.listen(8080, function() {
    console.log('server is running');
});

// test database connection
db.test();

//npm install express --save