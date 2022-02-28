const User = require("../model/user.model");

module.exports.getAllOrOne = async (req, res, next) => {
  try {
    // check param id sent
    if (req.params.id) {
      const user = await User.findById(req.params.id);
      res.status(200).json({ success: true, user });
    } else {
      const users = await User.find();
      res.status(200).json({ success: true, users });
    }
  } catch (err) {
    next(err);
  }
};

module.exports.UserController = { getAllOrOne };
