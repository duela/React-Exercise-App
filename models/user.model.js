const mongoose = require("mongoose");
// Create a user Schema with mongo encryption package
const userSchema = new mongoose.Schema({
  username: {
    // validation
    type: String,
    required: true,
    unique: true,
    trim: true,   // remove whitespace
    minlength: 3
  },
},{
  timestamps: true  // create a field when it was create and modified
});
// Create a User Model/collection
const User = mongoose.model("User", userSchema);

module.exports = User;
