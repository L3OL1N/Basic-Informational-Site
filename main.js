const http = require('http');
const fs = require("fs");
const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        fs.readFile("index.html",function(error,data){
            if(error) throw error;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
    else if(req.url === "/about"){
        fs.readFile("about.html",function(error,data){
            if(error) throw error;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
    else if(req.url === "/contact-me"){
        fs.readFile("contact-me.html",function(error,data){
            if(error) throw error;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
    else{
        fs.readFile("404.html",function(error,data){
            if(error) throw error;
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
server.listen(port,function(error){
    if(error){
        console.log("Something wrong",error);
    }
    else{
        console.log("Server is listening on port");
    }
})