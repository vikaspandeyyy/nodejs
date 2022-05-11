const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const exerciseSchema = mongoose.Schema({
  username: String,
  description: String,
  duration: Number,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
