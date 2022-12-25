const { Contact } = require("../../models");

const { RequestError } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  const contactId = req.params.contactId;
  const findContact = await Contact.findOne({ _id: contactId });
  const newContact = {
    name: findContact.name,
    email: findContact.email,
    phone: findContact.phone,
    favorite: req.body.favorite,
  };
  const result = await Contact.findByIdAndUpdate(
    { _id: contactId },
    newContact,
    { new: true }
  );
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateStatusContact;
