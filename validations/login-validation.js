const Joi = require("joi");

module.exports = Joi.object({
    phone: Joi.string()
        .error(Error("invalid phone")),
    password: Joi.string()
        .required()
        .min(1)
        .max(32)
        .error(Error("Invalid password")),
});