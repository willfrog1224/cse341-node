const http = require('http');

const routes = require('./routes');

console.log(routes.someText);


const server = http.createServer(routes.handler);
    //const url = req.url;(req.url, req.method, req.headers);
    //process.exit();

    // const url = req.url;
    // const method = req.method;



server.listen(3000);

