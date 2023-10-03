const http = require('node:http');
const fs = require('node:fs');
const fsPromises = require('node:fs').promises;
const path = require('node:path');

const logEvents = require('./logEvents');
const EventEmitter = require('events');

class Emitter extends EventEmitter {}
const myEmitter = new Emitter();
const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let myPath = path.join(__dirname, 'views', 'index.html');
    fs.readFile(myPath, 'utf8', (err, data) => res.end(data));
  } else {
    res.end('Not Found!');
  }
});

server.listen(PORT, () => console.log(`server running on ${PORT}`));
