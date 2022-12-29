const express = require("express");

const controller = require("../../controller/auth");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate } = require("../../middlewares");

const { schemasForAuth } = require("../../models");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemasForAuth.registerSchema),
  ctrlWrapper(controller.register)
);
router.post(
  "/login",
  validateBody(schemasForAuth.loginSchema),
  ctrlWrapper(controller.login)
);
router.get("/current", authenticate, ctrlWrapper(controller.getCurrentUser));
router.post("/logout", authenticate, ctrlWrapper(controller.logout));
router.patch(
  "/",
  authenticate,
  validateBody(schemasForAuth.subscriptionSchema),
  ctrlWrapper(controller.updateSubscription)
);

module.exports = router;
