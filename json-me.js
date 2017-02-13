var express=require('express');
var app= express()
var fs=require("fs")



app.get('/books', function(req,res){
    
    fs.readFile(process.argv[3], function(e,str){
        var object = JSON.parse(str)
        res.json(object)
    })
})

app.listen(process.argv[2])