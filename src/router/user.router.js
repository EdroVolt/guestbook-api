const express = require("express");
const { UserController } = require("../controller/user.controller");

const userRouter = express.Router();

userRouter
  .route("/users/:id?")
  .get(UserController.getAllOrOne)
  .post(UserController.createUser);

module.exports = userRouter;
