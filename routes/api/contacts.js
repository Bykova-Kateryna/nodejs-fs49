const express = require("express");

const controller = require("../../controller/contacts");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models");

const router = express.Router();

router.get("/", ctrlWrapper(controller.getAllContacts));

router.get("/:contactId", isValidId, ctrlWrapper(controller.getOneContactById));

router.post(
  "/",
  validateBody(schemas.validContactExemple),
  ctrlWrapper(controller.addNewContact)
);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.validContactExemple),
  ctrlWrapper(controller.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.validContactExempleForStatus),
  ctrlWrapper(controller.updateStatusContact)
);

router.delete("/:contactId", isValidId, ctrlWrapper(controller.deleteContact));

module.exports = router;
