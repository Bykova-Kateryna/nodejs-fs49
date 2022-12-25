const { Contact } = require("../../models");
const { RequestError } = require("../../helpers");

const deleteContact = async (req, res) => {
  const contactId = req.params.contactId;
  const result = await Contact.findByIdAndRemove({ _id: contactId });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

module.exports = deleteContact;
