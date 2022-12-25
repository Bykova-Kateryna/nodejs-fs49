const getAllContacts = require("./getAllContacts");
const getOneContactById = require("./getContactById");
const addNewContact = require("./addNewContact");
const deleteContact = require("./deleteContact");
const updateContactById = require("./updateContactById");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getAllContacts,
  getOneContactById,
  addNewContact,
  deleteContact,
  updateContactById,
  updateStatusContact,
};
