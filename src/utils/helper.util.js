module.exports.isRegisterd = async (collection, email, password) => {
  doc = await collection.findOne({ email, password }).exec();
  if (!doc) return false;

  return true;
};
