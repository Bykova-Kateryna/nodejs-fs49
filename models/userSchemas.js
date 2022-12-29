const Joi = require("Joi");
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(7).required(),
  subscription: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(7).required(),
});

const subscriptionSchema = Joi.object({
  subscription: Joi.string().required(),
});

const schemasForAuth = {
  registerSchema,
  loginSchema,
  subscriptionSchema,
};

module.exports = schemasForAuth;
