const url = require('url')
const fs = require('fs')
var http = require('http')

function mynode1(path,response){
    //response.writeHead(200,{'content-type':'text/html'})
    //response.write('hello')
    fs.readFile(path,null,function(error,data){
      if (error) {
          response.writeHead('404');
          response.write('file not found')
      }else {
          response.write(data);
      }
      response.end();

  });
  }



module.exports = {
    handleRequest: function(request,response){
        response.writeHead(200,{'content-type':'text/html'});
        var path = url.parse(request.path).pathname;
        switch (path) {
            case '/':
                //renderHTML('.index.html')
                
                break;
            case '/login':
                response.write('ok')


                break;
            default:
                response.write('Not found')
                response.end();
        }
    }
}