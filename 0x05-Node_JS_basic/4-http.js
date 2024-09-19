const http = require('http');

const serverRequest = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
};

const app = http.createServer(serverRequest);

app.listen(1245);

module.exports = app;
