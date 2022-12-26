const { Contact } = require("../../models");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  if (favorite) {
    const result = await Contact.find({ owner, favorite: true }, "-createdAt", {
      skip,
      limit,
    });
    return res.json(result);
  }
  const result = await Contact.find({ owner }, "-createdAt", { skip, limit });
  res.json(result);
};

module.exports = getAllContacts;
