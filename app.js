var express = require('express');
var app = express();
// var fs = require('fs');
// var bodyParser = require('body-parser');

//middleware
app.use(express.static(__dirname)); // serves the index.html
// app.set('view engine', 'ejs')

// app.get('/', function(req, res){
//   res.render('index');
// })

app.listen(process.env.PORT || 3000);