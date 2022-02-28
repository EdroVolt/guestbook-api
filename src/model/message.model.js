const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  content: String,
  userId: { type: mongoose.Types.ObjectId, ref: "users" },
  replys: [
    {
      userId: { type: mongoose.Types.ObjectId, ref: "users" },
      content: String,
    },
  ],
});

const Message = mongoose.model("messages", schema);

module.exports = Message;
