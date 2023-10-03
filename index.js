const logEvents = require('./logEvents.js');
const eventEmitter = require('node:events');

class MyEmitter extends eventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => {
  logEvents(msg);
});

setTimeout(() => {
  myEmitter.emit('log', 'Event Emitted');
}, 2000);
