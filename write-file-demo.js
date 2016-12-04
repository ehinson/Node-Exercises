var fs = require('fs');

var tomString = '{"name": "Tom"}';

var timString = { name : "Tim"};

fs.writeFile('tom.json', tomString);
fs.writeFile('tim.json', JSON.stringify(timString));