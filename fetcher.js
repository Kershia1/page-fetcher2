/*
Project Guidelines:
1) will recieve URL and Local Path as CLI's 
  These will download resource to URL to machine 
  
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

//PsuedoCode
//
// ✔️ download and install request library 

// ✔️ require request library 
const request = require('request');
const net = require('net');
const fs = require('fs/promises');

// ✔️ establish a connection
const conn = net.createConnection({
  host: 'example.edu',
  Port: 80
});
conn.setEncoding('UTF8');

// ✔️ needed to ask for the async function to be be explained at a juniour dev level to understand certain aspects of what has happening at the await section.
// ✔️ create a get request a connection with example.edu or an async promise req?
const fetcher() =>{
  try {
    const content = 'Downloaded and saved ${} to: ';//what is written to the file
    await fs.writeFile('', content);//pause, wait for fs.writeFile, bool if T over write with new, if F create with new content.
  } catch (err) {
    console.log(err);
  }
  }
fetcher(); //start file writing function and handle errors

//log connection
  //additional little function added to convert all characters to bytes. Question would this also include the count of white spaces or should I remove those as well. 

  const count = () => {
    let arr = '', 
    let i = 0;
    for(arr of array) {
      if(i <arr.length); 
      countBytes = arr.length(i); 
      countBytes ++; 
    }
    return countBytes.concat.
  }



  //Should add a few try and catch test or statements for these errors 
   // No site locates 
   //this is the wrong location 
   //request could not be completed due to connection error