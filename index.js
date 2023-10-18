var http = require('http')
var fs = require('fs');

const app1 = require('./server')



  
http.createServer(app1.handleRequest).listen(3000)
