const http = require('http');
const fs = require('fs');

var server = http.createServer(function (req, res) {
    console.log(req.url);
    switch (req.url) {
        case '/':
            console.log("this is /");
            res.write("this is /");
            break;
        case '/index.html':
            console.log("this is index.html");
            res.write("this is index.html");
            break

        default:
            console.log("404");
            res.write("404");
            break;
    };
    res.end();
});

server.listen(8888);
