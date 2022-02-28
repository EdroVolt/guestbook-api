const Message = require("../model/message.model");

getAllOrOne = async (req, res, next) => {
  try {
    // check param id sent
    if (req.params.id) {
      const message = await Message.findById(req.params.id).populate({
        path: "userId",
      });
      res.status(200).json({ success: true, message });
    } else {
      const messages = await Message.find().populate({ path: "userId" });
      res.status(200).json({ success: true, messages });
    }
  } catch (err) {
    next(err);
  }
};

createMessage = async (req, res, next) => {
  let { content, userId } = req.body;

  try {
    let newMessage = new Message({
      content,
      userId,
    });
    // save created message in DB
    const message = await newMessage.save();
    res.json({ success: true, message });
  } catch (err) {
    next(err);
  }
};

module.exports.MessageController = { getAllOrOne, createMessage };
