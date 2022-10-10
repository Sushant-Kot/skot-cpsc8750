// use the express library
const express = require('express');

// create a new server application
const app = express();

//Cookie Parser
const cookieParser = require('cookie-parser');

// Define the port we will listen on
// (it will attempt to read an environment global
// first, that is for when this is used on the real
// world wide web).
const port = process.env.PORT || 3000;

let nextVisitorId = 1;

// The main page of our website
app.get('/', (req, res) => {
  app.use(cookieParser());
  res.cookie('visitorId', nextVisitorId++);
  res.cookie('visited', Date.now().toString());
  res.render('welcome', /* params */)
});

//Adding Template Enjine Dependency
app.set('view engine','ejs');

// Public Folder
app.use(express.static('public'));

// Start listening for network connections
app.listen(port);

// Printout for readability
console.log("Server Started!");

//See cookies 
console.log(req.headers.cookie);

//Server print cookies in terminal
console.log(req.cookies);