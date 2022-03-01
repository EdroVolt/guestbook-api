var jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const { isRegisterd } = require("../utils/helper.util");
const { UserController } = require("./user.controller");

handelLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (await isRegisterd(User, email, password)) {
    let token = jwt.sign(
      {
        email: email,
        role: "user",
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.json({ success: true, token });
  } else {
    res.json({ success: false, msg: "please signup" });
  }
};

handelRegister = (req, res, next) => {
  UserController.createUser(req, res, next);
};

module.exports.AuthController = {
  handelLogin,
  handelRegister,
};
