const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let filePath;
  let statusCode = 200;

  if (req.url === '/') {
    filePath = './index.html';
  } else if (req.url === '/contact') {
    filePath = './contact.html'; 
  } else {
    filePath = './404.html';
    statusCode = 404;
  }

  // All paths lead to this single file reader
  fs.readFile(filePath, (err, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log('Server is running on port 8080...');
});