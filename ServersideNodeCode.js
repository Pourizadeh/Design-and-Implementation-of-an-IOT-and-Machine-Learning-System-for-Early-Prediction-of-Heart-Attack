//"The server side code of the project in Node.js"
//This program takes the data from the Arduino and sends it to the CoDE-ACS algorithm

// Remember to install the necessary Node.js package of Express.js using:
// npm install express body-parser
// Project By: Zahra Pourizadeh


const apiKey = abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
// API key from the CoDE-ACS algorithm website

const axios = require('axios'); 
//Library to connect to an API

const apiUrl = 'https://decision-support.shinyapps.io/code-acs/api';
//API for connecting to the CoDE-ACS algorithm website

// Make a GET request with query parameters and headers
axios.get(apiUrl, {
  params: queryParameters,
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
})
.then(response => {
  // Handle the API response data
  console.log('API Response:', response.data);
})
.catch(error => {
  // Handle errors
  console.error('Error connecting to the API:', error.message);
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to receive data from Arduino
app.post('/arduino-data', (req, res) => {
  const dataFromArduino = req.body;

  // CoDE-ACS's separate module
  const result = CoDE_ACS.processData(dataFromArduino);

  // Status situation alert
  res.status(200).send('Data received and processed successfully');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//CoDE-ACS module for demonstration purposes
const CoDE_ACS = {
  processData: (data) => {
    
    console.log('Processing data with CoDE-ACS:', data);
    return 'Processed Data';
  }
};
