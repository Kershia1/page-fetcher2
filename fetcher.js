const fs = require('fs/promises');

//get the portion the url needed
const args = process.argv.slice(2); //just returning the file path (example.edu)
const url = 'http://example.edu';

//Step 1 make a GET Request

const request = require('request');
request(url, (error, response, body) => {
  try {
    console.log('There seems to be an error:', error); // Print the error if one occurred
  } catch ({ err }) {
    console.log('Everything is working!');
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the example.edu/ homepage.

  const filePath = './lighthouse/page-fetcher2/fetcher.txt';
// ~ denotes home directory . denotes directory

const checkPathway = () => {
  if (fs.existsSync(filePath)) {
  console.log('File exists');
} else {
  console.log('File does not exist');
}

  //saves to this current file directory and folder appends new txt file of data
fs.writeFile(filePath, body, err => {
  if (err) {
    console.error('Error could not write to file: ', err);
  }
  // file written successfully
console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`); 
  });
});
