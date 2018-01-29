var express = require('express');
var app = express();
// var fs = require('fs');
// var bodyParser = require('body-parser');

//middleware
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

// var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
// app.use(urlencodedBodyParser);

app.get('/', function(req, res){
  res.render('index');
})

app.listen(process.env.PORT || 3000);