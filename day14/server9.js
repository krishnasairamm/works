var http = require('http');

var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('renamedapple.txt',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end(); //optional lines
    });
}).listen(5000);