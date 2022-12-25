const { Contact } = require("../../models");
const { RequestError } = require("../../helpers");

const getOneContactById = async (req, res) => {
  const contactId = req.params.contactId;
  const result = await Contact.findById({ _id: contactId });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = getOneContactById;
