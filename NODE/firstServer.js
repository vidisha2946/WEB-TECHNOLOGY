const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url == "/about") {
        const data = fs.readFileSync("about.html",'utf-8');
        res.end(data);
    }
    else if (req.url == "/contact") {
        const data = fs.readFileSync("contact.html",'utf-8');
        res.end(data);
    }
    else if (req.url == "/home") {
        const data = fs.readFileSync("home.html",'utf-8');
        res.end(data);
    }
    else
    {
        const data = fs.readFileSync("web.html",'utf-8');
        res.end(data);
    }
});
server.listen(3000, () => {
    console.log("server started at 3000");
});