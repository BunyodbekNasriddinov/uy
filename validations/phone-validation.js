const Joi = require('joi');

module.exports = Joi.object({
    phone: Joi.string()
        .error(Error('invalid phone'))
})