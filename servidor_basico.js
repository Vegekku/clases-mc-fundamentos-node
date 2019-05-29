var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'text/html; charset=UTF-8'});
    response.end('<h3>Wake up, Neo...</h3>');
});

// Run server
server.listen(1337, '127.0.0.1');
console.log('Server running in 127.0.0.1:1337');