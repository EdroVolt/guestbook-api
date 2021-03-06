const jwt = require("jsonwebtoken");

module.exports.isAuth = (req, res, next) => {
  try {
    const token = req.get("Authorization").split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decode !== undefined) {
      req.role = decode.role;
      next();
    }
  } catch (error) {
    error.message = "unAuthorized";
    error.status = 403;
    next(error);
  }
};
