var fs = require('fs');
var Promise = require('bluebird');

Promise.promisifyAll(fs);

// var data = require('./data1.json');

// console.log(data.name);

fs.readFile('./data2.json', 'utf-8', function(err, data){
  if (err){
    console.error('unable to read file');
  }
  else{
    try{
      data = JSON.parse(data);
      console.log(data.name);
    }
    catch (e){
      console.error('invalid JSON');
    }

  }

})

fs.readFileAsync('./data1.json')
  .then(JSON.parse)
  .then(function(val){
    console.log(val);
  })
  .catch(SyntaxError, function(e){
    console.error('invalid JSON');
  }).
  catch(function(e){
    console.error('unable to read file');
  });
