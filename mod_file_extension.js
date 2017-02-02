var mymodule = require('./mymodule.js');
var dir_name= process.argv[2];
var exten= process.argv[3];

mymodule(dir_name, exten,function callback(err, list){
    if(err){
        return console.log("issue:",err);
    }
    list.forEach(function(file){
        console.log(file);
    })
})