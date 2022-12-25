const Joi = require("Joi");

const validContactExemple = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const validContactExempleForStatus = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  validContactExemple,
  validContactExempleForStatus,
};

module.exports = schemas;
