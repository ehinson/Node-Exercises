var koa = require('koa'); 
var app = koa();

app.use(function *() {
  this.body = 'Hello World';
});

app.listen(5000);