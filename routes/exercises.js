const express = require("express");
const app = express();
let Excercise = require("../models/exercise.model");
let User = require("../models/user.model");

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

// Testing
// function findUser(user){
//   User.findOne({username: user})
//   .then(function(foundUser){
//     console.log(foundUser.username + " user is found"); // return found item in json format
//   }).catch(function(err){
//     console.log("user not found");
//   });
// }
// console.log(findUser("Samuels"));
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

app.route('/delete')
.delete((req, res) =>{
  const deleteId = req.body.id;
  Excercise.findByIdAndRemove(deleteId)
  .then(() => res.json(" Succesfully deleted "))
  .catch(err => res.status(400).json("Error: " + err))
})

app.route('/:id')
.get((req, res) =>{
  const id = req.params.id
  Excercise.findById(id)
  .then(foundId =>{
    res.json(foundId)
  }).catch(err => res.status(400).json("Error: " + err))
})

app.route('/update/:id')
.put((req, res) =>{
  const id = req.params.id
  Excercise.findByIdAndUpdate(id,
    {
      username: req.body.username,
     description: req.body.description,
     duration: Number(req.body.duration),
     date: Date.parse(req.body.date)
   })
  .then(updateExcercise =>{
    res.json("Updated Succesfully ");
  }).catch(err => res.status(400).json("Error: " + err))
})

module.exports = app;























//
// const express = require("express");
// const app = express();
// let Excercise = require("../models/exercise.model");
// let User = require("../models/user.model");
//
// // using express app.route(). chainable route to reduce redundacy and typos
// // first endpoint that handles incoming HTTP Get requests on the /excercises URL path
// app.route('/')
// .get(function(req, res){
//   Excercise.find()
//   .then(function(foundExcercise){
//     res.json(foundExcercise); // return found item in json format
//   }).catch(function(err){
//     res.status(400).json("Error: " + err);
//   });
// });
//
// // // testing username
// // function findUser(user){
// //   User.findOne({username: user})
// //   .then(function(foundUser){
// //     console.log(foundUser.username + " user is found"); // return found item in json format
// //   }).catch(function(err){
// //     console.log("user not found");
// //   });
// // }
// // console.log(findUser("Samuel"));
// //tap into the post req data in add
// app.route('/add')
// .post((req, res) => {
//   const username = req.body.username;
//   const description = req.body.description;
//   const duration = Number(req.body.duration);
//   const date = Date.parse(req.body.date);
//
//   User.findOne({username: username})
//   .then(function(foundUser){
//     if(foundUser)
//     const newExcercise = new Excercise({
//       username,
//       description,
//       duration,
//       date
//     })
//     newExcercise.save()
//     .then(() => res.json("Excercise added"))
//     .catch(err => res.status(400).json("Error: " + err))
//   })
//   .catch(err => res.status(400).json("Error: username not found " + err))
//
// })
//
// module.exports = app;
