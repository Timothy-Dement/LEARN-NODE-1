var http = require('http');
var url = require('url');
var fs = require('fs');
var date = require('./module');
var uc = require('upper-case');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(uc("hello, world!"));
        res.write(data);
        res.write("The current time and date is currently:</br><strong>" + date.getDate() + "</strong>.");
        res.end();
    });
}).listen(8080);