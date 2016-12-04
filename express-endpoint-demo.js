var express = require('express');
var app = express();

var fs = require('fs');


app.get('/', function(req, res){
  console.log('user requested home page');

  res.send('Hello World!');
});

app.use('/message', function(req, res){
  console.log('user requested endpoint');

  res.send('this is working');
});

app.use('/users', function(req, res){
  fs.readFile('./data1.json', 'utf-8', function(err, data){
    if (err){
      console.log(err);
    }
    else{
      res.send(data);
    }
    
    
  })
})
app.listen(4000);