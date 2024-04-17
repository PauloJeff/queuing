/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/interfaces/http/presentations/user/UserSerializer')} ctx.userSerializer
 * @param {import('src/app/operations/user/UserFindOperation')} ctx.userFindOperation
 * @param {import('src/app/operations/user/UserCreateOperation')} ctx.userCreateOperation
 * @param {import('src/app/operations/user/UserUpdateOperation')} ctx.userUpdateOperation
 * @param {import('src/app/operations/user/UserDeleteOperation')} ctx.userDeleteOperation
 * @param {import('src/domain/constants/global/HttpConstants')} ctx.httpConstants
 * @param {import('src/interfaces/http/middlewares/AsyncMiddleware')} ctx.asyncMiddleware
 */
module.exports = ({httpConstants, asyncMiddleware}) => ({
    create: asyncMiddleware(async ({container, body, res}) => {
        const {userCreateOperation, userSerializer} = container.cradle;
        const data = await userCreateOperation.create(body);
        const response = userSerializer.serialize(data);

        return res.status(httpConstants.code.CREATED).json(response);
    }),
    find: asyncMiddleware(async ({container, query, res}) => {
        const {userFindOperation, userSerializer} = container.cradle;
        const data = await userFindOperation.find(query);
        const response = userSerializer.serialize(data);

        return res.status(httpConstants.code.OK).json(response);
    }),
    findOne: asyncMiddleware(async ({container, params, res}) => {
        const {userFindOperation, userSerializer} = container.cradle;
        const data = await userFindOperation.findOne(params);
        const response = userSerializer.serialize(data);

        return res.status(httpConstants.code.OK).json(response);
    }),
    updateOne: asyncMiddleware(async ({container, params, body, res}) => {
        const {userUpdateOperation} = container.cradle;

        await userUpdateOperation.updateOne(params, body);

        return res.status(httpConstants.code.NO_CONTENT).end();
    }),
    deleteOne: asyncMiddleware(async ({container, params, res}) => {
        const {userDeleteOperation} = container.cradle;

        await userDeleteOperation.deleteOne(params);

        return res.status(httpConstants.code.NO_CONTENT).end();
    })
})