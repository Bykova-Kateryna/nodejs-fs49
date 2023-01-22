const express = require("express");

const controller = require("../../controller/auth");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate, avatarsDir } = require("../../middlewares");

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
router.patch(
  "/avatars",
  authenticate,
  avatarsDir.single("avatar"),
  ctrlWrapper(controller.changeAvatars)
);
router.get("/verify/:verificationToken", ctrlWrapper(controller.verification));
router.post(
  "/verify",
  validateBody(schemasForAuth.verifyResendSchema),
  ctrlWrapper(controller.resendVerifyMessage)
);

module.exports = router;
