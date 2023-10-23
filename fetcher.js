/*
Project Guidelines:
1) will recieve URL and Local Path as CLI's 
  These will download resource to URL to machine 
  code to run: node fetcher.js http://www.example.edu/ ./index.html
  
  Expected Printed Output:
  > node fetcher.js http://www.example.edu/ ./index.html
Downloaded and saved 3261 bytes to ./index.htm

2) Async Section: try promises with the FS examples given
  a) Make an HTTP request and wait for the response
  b)After completion of HTTP Request, recieved data needs to be taken and written into the local file system. 
    Hint: Use Nested Callbacks 
    DO NOT USE: writeFileSync is for sychronous files. Or pipesystem 
    A Note on File Sizing: 1 Char = 1 btye for the msg in printed output. 

Required Tools: 
Node request library 
Node FS library to write file 

using this tutorial https://www.freecodecamp.org/news/node-js-async-await-tutorial-with-asynchronous-javascript-examples/

to help understand async fs requests. very lost between 2 lesson plans
*/

//References

//remeber html body request
/**
 * Requests consist of the following elements:

An HTTP method, usually a verb like GET, POST, or a noun like OPTIONS or HEAD that defines the operation the client wants to perform. Typically, a client wants to fetch a resource (using GET) or post the value of an HTML form (using POST), though more operations may be needed in other cases.
The path of the resource to fetch; 
the URL of the resource stripped from elements that are obvious from the context, for example without the protocol (http://), the domain (here, developer.mozilla.org), or the TCP port (here, 80).
The version of the HTTP protocol.
Optional headers that convey additional information for the servers.
A body, for some methods like POST, similar to those in responses, which contain the resource sent.
 */

//https://medium.com/@shangrz/sending-synchronous-http-requests-with-node-js-f3f91bcfba9f AKA Callback hell

//https://www.w3schools.com/js/js_callback.asp

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

//https://stackoverflow.com/questions/2496710/writing-to-files-in-node-js

//PsuedoCode
//
// ✔️ download and install request library 

// ✔️ require request library 
//already includes my net library
const request = require('request');
const fs = require('fs.promises');



// // ✔️ establish a connection
// const conn = net.createConnection({
//   host: 'example.edu',
//   Port: 80
// });
// conn.setEncoding('UTF8');

//get the portion the url needed
const args = process.argv.slice(2); //just returning the file path 
const url = args[0];// use this 
const fileSaveAt = args[i]; //at this location 

// ✔️ create a get request a connection with example.edu or an async promise req?

//Step 1 make a GET Request
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET

//log connection
  //additional little function added to convert all characters to bytes. Question would this also include the count of white spaces or should I remove those as well. 

const fileSize = fileSize.length;
console.log('Downloaded and saved ${fileSize} bytes to ${filePath}'); 

//Overthinking
  // const count = () => {
  //   let arr = '', 
  //   let i = 0;
  //   for(arr of array) {
  //     if(i <arr.length); 
  //     countBytes = arr.length(i); 
  //     countBytes ++; 
  //   }
  //   return countBytes.concat.
  // }



  //Should add a few try and catch test or statements for these errors 
   // No site locates 
   //this is the wrong location 
   //request could not be completed due to connection error