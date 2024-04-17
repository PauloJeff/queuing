/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/interfaces/http/presentations/user/UserController')} ctx.userController
 * @param {import('src/domain/constants/global/HttpConstants')} ctx.httpConstants
 * @param {import('src/interfaces/http/schemas/user/UserSchema')} ctx.userSchema
 */
module.exports = ({userController, httpConstants, userSchema}) => [
    {
        method: 'get',
        path: '/users',
        validation: {},
        handler: userController.find,
        responses: {
            [httpConstants.code.OK]: {
                description: 'Sucessful operation',
                schema: userSchema.responses['200_collection']
            },
            [httpConstants.code.BAD_REQUEST]: {
                description: 'Failed validation',
                schema: userSchema.responses[400]
            }
        },
        description: 'Get users',
        summary: 'Get users',
        tags: ['User']
    },
    {
        method: 'get',
        path: '/users/:id',
        validation: {
            params: userSchema.params
        },
        handler: userController.findOne,
        responses: {
            [httpConstants.code.OK]: {
                description: 'Sucessful operation',
                schema: userSchema.responses['200_collection']
            },
            [httpConstants.code.BAD_REQUEST]: {
                description: 'Failed validation',
                schema: userSchema.responses[400]
            },
            [httpConstants.code.NOT_FOUND]: {
                description: 'Failed operation',
                schema: userSchema.responses[404]
            }
        },
        description: 'Get a user',
        summary: 'Get a user',
        tags: ['User']
    },
    {
        method: 'post',
        path: '/users',
        validation: {
            body: userSchema.body
        },
        handler: userController.create,
        responses: {
            [httpConstants.code.CREATED]: {
                description: 'Sucessful operation',
                schema: userSchema.responses['200_collection']
            },
            [httpConstants.code.BAD_REQUEST]: {
                description: 'Failed validation',
                schema: userSchema.responses[400]
            }
        },
        description: 'Create a user',
        summary: 'Create a user',
        tags: ['User']
    },
    {
        method: 'put',
        path: '/users/:id',
        validation: {
            params: userSchema.params,
            body: userSchema.body
        },
        handler: userController.updateOne,
        responses: {
            [httpConstants.code.NO_CONTENT]: {
                description: 'Sucessful operation',
            },
            [httpConstants.code.BAD_REQUEST]: {
                description: 'Failed validation',
                schema: userSchema.responses[400]
            },
            [httpConstants.code.NOT_FOUND]: {
                description: 'Failed operation',
                schema: userSchema.responses[404]
            }
        },
        description: 'Update a user',
        summary: 'Update a user',
        tags: ['User']
    },
    {
        method: 'delete',
        path: '/users/:id',
        validation: {
            params: userSchema.params
        },
        handler: userController.deleteOne,
        responses: {
            [httpConstants.code.NO_CONTENT]: {
                description: 'Sucessful operation'
            },
            [httpConstants.code.BAD_REQUEST]: {
                description: 'Failed validation',
                schema: userSchema.responses[400]
            },
            [httpConstants.code.NOT_FOUND]: {
                description: 'Failed operation',
                schema: userSchema.responses[404]
            }
        },
        description: 'Delete a user',
        summary: 'Delete a user',
        tags: ['User']
    }
];
