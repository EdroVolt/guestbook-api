module.exports.isRegisterd = async (collection, email, password) => {
  doc = await collection.findOne({ email: email }).exec();
  if (!doc) return false;

  return true;
};
