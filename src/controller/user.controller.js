const User = require("../model/user.model");

getAllOrOne = async (req, res, next) => {
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

createUser = async (req, res, next) => {
  let { name, password, email } = req.body;

  try {
    let newUser = new User({
      name,
      password,
      email,
    });
    // save created user in DB
    const user = await newUser.save();
    res.json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

module.exports.UserController = { getAllOrOne, createUser };
