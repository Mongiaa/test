const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PhotoSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  title: {
    type: String,
    required: true
  },
  path_photo: {
    type: String,
    required: true
  }
});

module.exports = Photo = mongoose.model("photo", PhotoSchema);