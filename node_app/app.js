const log = require('./logger');
log('Hello World!!!');

const path = require('path');
var pathURI = path.parse(__filename);
console.log(pathURI);

const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener Called', arg);
});

//Raise an event
emitter.emit('messageLogged', {id:1, url:'http://'});

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

// server.on('connection', (socket) => {
//     console.log('New Connection...');
// });

server.listen(3000);

console.log('Listening on port 3000....');

