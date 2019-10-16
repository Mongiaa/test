const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  birthYear: {
    type: Number,
    required: true
  },
  birthPlace: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("user", UserSchema);