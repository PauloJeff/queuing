/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/app/services/user/UserCreateService')} ctx.userCreateService
 */
module.exports = ({userCreateService}) => ({
    create: async (data) => {
        return userCreateService.create(data);
    }
});
