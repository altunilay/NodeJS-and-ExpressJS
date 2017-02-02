module.exports = function (dir_name, exten, callback) { 
    var fs=require('fs');
    var path=require('path');
    fs.readdir(dir_name, function (err,list){
        if(err){
            return callback(err);
        }
        list=list.filter(function(file){
            return path.extname(file)==="."+exten;
        })
        callback(null,list);
    });
}  