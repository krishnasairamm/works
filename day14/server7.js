var fs = require('fs');

fs.appendFile('apple2.txt','Im appended!',function(err){
    if(err) throw err;
    console.log('Saved!!');
});