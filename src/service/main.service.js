isValidEmail = (email) => {
  // TODO: add validation for email formate
  if ((email, email.length >= 10)) {
    return true;
  }
  return false;
};

isValidPassword = (password) => {
  if (password && password.length >= 8) {
    return true;
  }
  return false;
};

isValidName = (name) => {
  if (name && name.length >= 3 && isNaN(name)) {
    return true;
  }
  return false;
};

module.exports.Validator = {
  isValidEmail,
  isValidPassword,
  isValidName
};
