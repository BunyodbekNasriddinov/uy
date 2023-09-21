const Joi = require("joi");

module.exports = Joi.object({
  phone: Joi.string()
    .error(Error("Invalid phone")),
  password: Joi.string().required().min(1).error(Error("Invalid password")),
});
