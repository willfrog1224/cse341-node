const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/'){
        res.headersSent('Content', 'text/html');
        res.write('<html>');
        res.write('<head><title>1st Assign</title><head>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();        
    }
    if (url === '/users'){
        res.headersSent('Content', 'text/html');
        res.write('<html>');
        res.write('<head><title>1st Assign</title><head>')
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
        res.write('</html>');
        return res.end();  
    }
    if (url === '/create-user'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () =>{
            const parseBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

server.listen(3000);