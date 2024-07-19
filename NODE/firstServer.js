const http = require('http');
server = http.createServer((req,res)=>{
    if(req.url == "/about"){
        fs.readfile("about.html",(err,data)=>{
            if(err){
                res.end(err);
            }
            else{
                res.statuscode = 200;
                res.setHeader('content-tyep','text/html');
                res.writeHead(200,'content-Type','text/html')
                res.end(data);
            }
        })
    }
	else if(req.url == "/contact"){
        fs.readFile("contact.html",(err,data)=>{
                if(err){
                    res.end(err);
                }
                else{
                    res.statuscode = 200;
                    res.setHeader('content-tyep','text/html');
                    res.writeHead(200,'content-Type','text/html')
                    res.end(data);
                }
        })
    }
});

server.listen(2946,()=>{
    console.log("server started at 2946");
});