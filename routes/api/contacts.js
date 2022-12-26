const express = require("express");

const controller = require("../../controller/contacts");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, isValidId, authenticate } = require("../../middlewares");

const { schemas } = require("../../models");

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(controller.getAllContacts));

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(controller.getOneContactById)
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.validContactExemple),
  ctrlWrapper(controller.addNewContact)
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.validContactExemple),
  ctrlWrapper(controller.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.validContactExempleForStatus),
  ctrlWrapper(controller.updateStatusContact)
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  ctrlWrapper(controller.deleteContact)
);

module.exports = router;
