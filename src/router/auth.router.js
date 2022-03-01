const express = require("express");
const { AuthController } = require("../controller/auth.controller");

const authRouter = express.Router();

authRouter.post("/login", AuthController.handelLogin);
authRouter.post("/signup", AuthController.handelRegister);

module.exports = authRouter;
