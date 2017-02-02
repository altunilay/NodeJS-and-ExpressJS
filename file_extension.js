var fs= require('fs');
var path= require('path');
fs.readdir(process.argv[2], function callback(err,list){
    if(err){
        console.log("Something went wrong!");
    }
    list.forEach(function(file){
        if(path.extname(file)==="." + process.argv[3]){
            console.log(file);
        }
    })
});
