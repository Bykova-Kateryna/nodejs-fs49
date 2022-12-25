const { Contact } = require("../../models");
const { RequestError } = require("../../helpers");

const updateContactById = async (req, res) => {
  const contactId = req.params.contactId;
  const result = await Contact.findByIdAndUpdate({ _id: contactId }, req.body, {
    new: true,
  });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({ message: "Changes made" });
};

module.exports = updateContactById;
