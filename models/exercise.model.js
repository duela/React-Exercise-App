const mongoose = require("mongoose");
// Create a user Schema with mongo encryption package
const exerciseSchema = new mongoose.Schema({
  username: {
    // validation
    type: String,  required: true,
  },
  description: {
    type: String,required: true,
  },
  duration: {
    type: Number,  required: true,
  },
  date: {
    type: Date,required: true,
  }
},{
  timestamps: true  // create a field when it was create and modified
});
// Create a Exercise Model/collection
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
