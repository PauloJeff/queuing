/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/app/services/user/UserDeleteService')} ctx.userDeleteService
 */
module.exports = ({userDeleteService}) => ({
    deleteOne: async (filter) => {
        return userDeleteService.deleteOne(filter);
    }
});
