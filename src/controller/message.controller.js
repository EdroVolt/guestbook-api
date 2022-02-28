const Message = require("../model/message.model");

getAllOrOne = async (req, res, next) => {
  try {
    // check param id sent
    if (req.params.id) {
      const message = await Message.findById(req.params.id);
      res.status(200).json({ success: true, message });
    } else {
      const messages = await message.find();
      res.status(200).json({ success: true, messages });
    }
  } catch (err) {
    next(err);
  }
};

module.exports.MessageController = { getAllOrOne };
