const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const port = 3000;

// bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// public folder
app.use(express.static("public"));

// cors
app.use(cors());

//Listening on port 3000 and if it goes well then logging a message saying that the server is running
app.listen(process.env.PORT || port, function(req, res){
  console.log('Server is connected to port ' + port + ' ...');
});
