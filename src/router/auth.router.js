const express = require("express");
const { AuthController } = require("../controller/auth.controller");
const { validateLoginBody } = require("../middlewares/bodyValidator.mw");

const authRouter = express.Router();

authRouter.post("/login", validateLoginBody, AuthController.handelLogin);
authRouter.post("/signup", AuthController.handelRegister);

module.exports = authRouter;
