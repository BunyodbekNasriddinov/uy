const Joi = require("joi");

module.exports = Joi.object({
    link: Joi.string().min(1).max(500).required().error(Error("invalid link")),
});