var express = require('express');
var app = express();

app.get('/home',function(req,res){
    res.send("Welcome to home pageeeeeeeeee.");
});

app.post('/contact',function(req,res){
    res.send("you called the post method dude...!! '/contact'!\n");
});

app.all('/test',function(req,res){
    res.send("http method doesn't have any eeffect on this route..!");
});

app.listen(3000);