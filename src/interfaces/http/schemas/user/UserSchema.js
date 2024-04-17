const joi = require('joi');

/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/interfaces/http/schemas/user/UserSingleSchema')} ctx.userSingleSchema
 * @param {import('src/interfaces/http/schemas/global/ErrorSchema')} ctx.errorSchema
 */
module.exports = ({userSingleSchema, errorSchema}) => ({
    params: joi
        .object({
            id: joi.string().required()
        })
        .required(),
    body: joi
        .object({
            name: joi.string().required().example('Jhon Doe'),
            email: joi.string().email().required().example('jhon_doe@email.com'),
            age: joi.string().required().example('33')
        })
        .required(),
    responses: {
        '200_collection' : joi
            .object({
                docs: joi.array().items(userSingleSchema).required
            })
            .required(),
        200: userSingleSchema,
        201: userSingleSchema,
        400: errorSchema,
        404: errorSchema
    }
})