/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/app/services/user/UserFindService')} ctx.userFindService
 */
module.exports = ({userFindService}) => ({
    find: async (filter) => {
        return userFindService.find(filter);
    },
    findOne: async(filter) => {
        return userFindService.findOne(filter);
    }
});
