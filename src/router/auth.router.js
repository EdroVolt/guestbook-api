const express = require("express");
const { AuthController } = require("../controller/auth.controller");
const {
  validateLoginBody,
  validateRegisterBody,
} = require("../middlewares/bodyValidator.mw");

const authRouter = express.Router();

authRouter.post("/login", validateLoginBody, AuthController.handelLogin);
authRouter.post(
  "/register",
  validateRegisterBody,
  AuthController.handelRegister
);

module.exports = authRouter;
