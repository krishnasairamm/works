var fs = require('fs');

fs.writeFile('apple1.txt','Do you understand !',function(err){
    if(err) throw err;
    console.log('Saved!!');
});