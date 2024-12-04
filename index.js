import http from 'http';

http.createServer((req,res)=>{
    res.end("Api is Deployed")

}).listen(3000,()=>{
    console.log("Server Started");
    
})