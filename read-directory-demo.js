var fs = require('fs');

fs.readdir('../../Applications', function(err, data){
  console.log(data);
})