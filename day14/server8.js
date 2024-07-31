var fs = require('fs');

fs.rename('apple1.txt','renamedapple.txt',function(err){
    if(err) throw err;
    console.log('File renamed>>!!!!');
});