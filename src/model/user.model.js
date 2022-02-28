const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("users", schema);

module.exports = User;
