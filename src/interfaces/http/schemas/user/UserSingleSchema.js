const joi = require('joi');

/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/interfaces/http/schemas/user/UserLinkSchema')} ctx.userLinkSchema
 */
module.exports = ({userLinkSchema}) =>
    joi
        .object({
            id: joi.string().required().example('1'),
            name: joi.string().required().example('Jhon Doe'),
            email: joi.string().email().required().example('jhon_doe@email.com'),
            age: joi.string().required().example('33'),
            created_at: joi.string().isoDate().required(),
            updated_at: joi.string().isoDate().required(),
            deleted_at: joi.string().isoDate(),
            links: joi
                .object({
                    find: userLinkSchema,
                    update: userLinkSchema,
                    delete: userLinkSchema
                })
                .required()
        })
        .required();