const { Validator } = require("../service/main.service");

module.exports.validateLoginBody = (req, res, next) => {
  const { email, password } = req.body;

  if (!Validator.isValidEmail(email)) {
    throw new Error("please enter valid email");
  } else if (!Validator.isValidPassword(password)) {
    throw new Error("please enter valid password");
  }

  next();
};

module.exports.validateRegisterBody = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!Validator.isValidEmail(email)) {
    throw new Error("please enter valid email");
  } else if (!Validator.isValidPassword(password)) {
    throw new Error("please enter valid password");
  } else if (!Validator.isValidName(name)) {
    throw new Error("please enter valid name");
  }
  next();
};
