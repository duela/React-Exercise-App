const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const port = 3000;
const app = express();
const mongoose = require("mongoose");

// bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// public folder
app.use(express.static("public"));

// cors
app.use(cors());

// create mongoDB server
const uri = (process.env.MONGODB);
mongoose.connect(uri , {useNewUrlParser: true, useUnifiedTopology: true }).then(function(){
    console.log("Connected to MongoDB!!!");
})
.catch(function(err){
    console.log(err);
});

// Tell the server to use the files we just created
// First require the files then use the file
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use('/exercises', exercisesRouter);  // when you load '/excercises' on url it would load everything in exercisesRouter
app.use('/users', usersRouter);

//Listening on port 3000 and if it goes well then logging a message saying that the server is running
app.listen(process.env.PORT || port, function(req, res){
  console.log('Server is connected to port ' + port + ' ...');
});
