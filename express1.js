var express = require('express');
var app = express();

app.get('/hooman',function(req,res){
    res.send("Welcome to exprerss js testing by human..!!!!");
});

app.listen(3000);