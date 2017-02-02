var http=require('http');
var bl=require('bl');
var results=[];
var count=0;

function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     } 

function httpGet(i){
    http.get(process.argv[2+i],function(response){
        response.pipe(bl(function(err,data){
            if(err) return console.error(err);
            results[i]=data.toString();
            count++;
            
            if(count==3){
               printResults();
            }
        }))
    })
}

for(var a=0; a<3;a++){
    httpGet(a);
}