var fs = require('fs');
fs.readFile(process.argv[2], function callback(err,data){
    if(err){
        return console.log("HOPS!");
    }
    var number = data.toString().split("\n");
    console.log(number.length-1);
    
});



