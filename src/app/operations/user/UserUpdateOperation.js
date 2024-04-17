/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/app/services/user/UserUpdateService')} ctx.userUpdateService
 */
module.exports = ({userUpdateService}) => ({
    updateOne: async (filter, data) => {
        return userUpdateService.updateOne(filter, data);
    }
});
