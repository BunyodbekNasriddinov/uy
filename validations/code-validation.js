const Joi = require('joi');

module.exports = Joi.object({
    phone: Joi.string()
        .error(Error('invalid phone')),
    code: Joi.string()
        .required()
        .pattern(new RegExp('^[0-9]{5}$'))
        .error(Error('invalid code'))
});