var http = require('http');
var url = require('url');
var fs = require('fs');

function logRequest(req) {
    console.log(`Received ${req.method} request for ${req.url}`);
  }

http.createServer(function (req, res) {
    logRequest(req);

    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
    if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
    });
}).listen(8080);

console.log('Server is running at http://localhost:8080/');