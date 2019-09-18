// console.log("Hello Node");


// // Installing and Using NPM
// const catMe = require('cat-me'); 

// console.log(catMe()); //it will print a random cat

// // -------------------------------------------------------------------

// const jokes = require('knock-knock-jokes');

// console.log(jokes()); //it will print random jokes

// --------------------------------------------------------------------

// Working with Events 

const EventEmitter = require("events"); // it's a request , load the event module, Class it's a container of bunch of methods
 const emitter = new EventEmitter();// object instance of a class
 
 //Register a listener, it's a function that will be call when we raise an event
 emitter.on('messageLogged',(arg)=>{ // 2 param: 1: name of the event, 2: callback or listener
     console.log("Listener Called",arg);
 });

 
 //raise an event
 //signaling that event it's happen
emitter.emit("messageLogged",{id: 1,url:"http://"});//event argument

