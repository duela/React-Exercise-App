const express = require("express");
const app = express();
let User = require("../models/user.model");

// using express app.route(). chainable route to reduce redundacy and typos
// first endpoint that handles incoming HTTP Get requests on the /users URL path
app.route('/')
.get(function(req, res){
  User.find()
  .then(function(foundUser){
    res.json(foundUser); // return found item in json format
  }).catch(function(err){
    res.status(400).json("Error: " + err);
  });
});

//tap into the post req data in add
app.route('/add')
.post((req, res) => {
  const username = req.body.username;
  const newUser = new User({username});
  newUser.save()
  .then(() => res.json("User added"))
  .catch(err => res.status(400).json("Error: " + err))
})

app.route('/delete')
.delete((req, res) =>{
  const deleteId = req.body.id;
  User.findByIdAndRemove(deleteId)
  .then(() => res.json(" Succesfully deleted "))
  .catch(err => res.status(400).json("Error: " + err))
})

app.route('/:id')
.get((req, res) =>{
  const id = req.params.id
  User.findById(id)
  .then(foundId =>{
    res.json(foundId)
  }).catch(err => res.status(400).json("Error: " + err))
})

app.route('/update/:id')
.put((req, res) =>{
  const id = req.params.id
  User.findByIdAndUpdate(id, {username: req.body.username})
  .then(updateUser =>{

    res.json(updateUser);
  }).catch(err => res.status(400).json("Error: " + err))
})

module.exports = app;
