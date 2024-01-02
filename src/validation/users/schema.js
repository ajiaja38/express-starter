const Joi = require("joi");

const UserPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .pattern(/^[a-zA-Z0-9]{3,30}$/),
});

module.exports = UserPayloadSchema;
