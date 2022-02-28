const express = require("express");
const { MessageController } = require("../controller/message.controller");

const messageRouter = express.Router();

messageRouter
  .route("/messages/:id?")
  .get(MessageController.getAllOrOne)
  .post(MessageController.createMessage)
  .put(MessageController.updateMessage);

module.exports = messageRouter;
