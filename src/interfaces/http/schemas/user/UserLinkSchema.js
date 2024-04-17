const joi = require('joi');

module.exports = () => 
    joi
        .object({
            href: joi.string().uri().required().example('http://domain/api/users/1')
        })
        .required();