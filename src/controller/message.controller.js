const Message = require("../model/message.model");

getAllOrOne = async (req, res, next) => {
  try {
    // check param id sent
    if (req.params.id) {
      const message = await Message.findById(req.params.id).populate({
        path: "userId",
      });

      const formattedMessage = {
        _id: message._id,
        name: message.userId.name,
        content: message.content,
        replys: message.replys,
      };
      res.status(200).json({ success: true, message: formattedMessage });
    } else {
      const messages = await Message.find().populate({ path: "userId" });
      const formattedMessages = messages.map((message) => {
        return {
          _id: message._id,
          name: message.userId.name,
          content: message.content,
          replys: message.replys,
        };
      });
      res.status(200).json({ success: true, messages: formattedMessages });
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

updateMessage = async (req, res, next) => {
  const { _id, userId, content } = req.body;

  try {
    const message = await Message.findById(_id);
    if (!message) throw new Error("no such message");

    // check if message belongs to this user
    if (message.userId != userId) throw new Error("Unauthorized");

    message.content = content || message.content;
    // save updated message
    const updatedMessage = await message.save();
    res.json({ success: true, updatedMessage });
  } catch (err) {
    next(err);
  }
};

deleteMessage = async (req, res, next) => {
  const { _id } = req.body;
  try {
    const message = await Message.deleteOne({ _id });
    res.send({ success: true });
  } catch (err) {
    next(err);
  }
};

replyOnMessage = async (req, res, next) => {
  const { userId, content = "" } = req.body;

  try {
    const message = await Message.findById(req.params.id);
    if (!message) throw new Error("no such message");

    message.replys.push({
      content,
      userId,
    });
    // save updated message
    const updatedMessage = await message.save();
    res.json({ success: true, updatedMessage });
  } catch (err) {
    next(err);
  }
};

module.exports.MessageController = {
  getAllOrOne,
  createMessage,
  updateMessage,
  deleteMessage,
  replyOnMessage,
};
