const express = require("express");
const app = express();
let Excercise = require("../models/exercise.model");

// using express app.route(). chainable route to reduce redundacy and typos
// first endpoint that handles incoming HTTP Get requests on the /excercises URL path
app.route('/')
.get(function(req, res){
  Excercise.find()
  .then(function(foundExcercise){
    res.json(foundExcercise); // return found item in json format
  }).catch(function(err){
    res.status(400).json("Error: " + err);
  });
});

//tap into the post req data in add
app.route('/add')
.post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExcercise = new Excercise({
    username,
    description,
    duration,
    date
  });
  newExcercise.save()
  .then(() => res.json("Excercise added"))
  .catch(err => res.status(400).json("Error: " + err))
})

module.exports = app;
