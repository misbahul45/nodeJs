const EventEmitter=require('events');
const logEvent = require('./logEvents');

class MyEmitter extends EventEmitter{}


//initial state
const myEmitter=new MyEmitter();


//add listener for the log event
myEmitter.on('log',msg=>logEvent(msg))


setTimeout(()=>{
    myEmitter.emit('log','log event emitted!');
},2000);


