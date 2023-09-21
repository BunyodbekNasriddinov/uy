const Joi = require("joi");

module.exports = Joi.object({
    name: Joi.string()
        .required()
        .min(3)
        .max(32)
        .pattern(new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"))
        .error(Error("Invalid name")),
    phone: Joi.string()
        .error(Error("Invalid phone")),
    password: Joi.string()
        .required()
        .min(1)
        .max(32)
        .error(Error("Invalid password")),
});