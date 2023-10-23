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
//https://www.w3schools.com/js/js_callback.asp

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

//PsuedoCode

// ✔️ download and install request library 

// ✔️ require request library 

const fs = require('fs/promises');

//get the portion the url needed
const args = process.argv.slice(2); //just returning the file path (example.edu)

// ✔️ create a get request a connection with example.edu maanage async elements with callbacks.

//Step 1 make a GET Request
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET

const request = require('request'); //UnhandledPromiseRejectionWarning?
request('http://example.edu', (error, response, body) => {
  try {
    console.log('There seems to be an error:', error); // Print the error if one occurred
  } catch ({ err }) {
    console.log('Everything is working!');
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the example.edu/ homepage.
});

  //Step 2 write the file 
//following example from node on writing files

const content = body.length;
//can I make this a callback to log the data perhaps?

const filePath = './lighthouse/page-fetcher2/fetcher.txt';
// ~ denotes home directory . denotes directory

  //saves to this current file directory and folder appends new txt file of data
fs.writeFile(filePath, content, err => {
  if (err) {
    console.error('Error could not write to file: ', err);
  }
  // file written successfully
// const fileSize = content.length;
console.log('Downloaded and saved ${content} bytes to ${filePath}'); 
});

//Possible errors to handle
  //Should add a few try and catch test or statements for these errors ?
   // No site locates 
   //this is the wrong location 
   //request could not be completed due to connection error