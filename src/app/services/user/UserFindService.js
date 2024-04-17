/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/infra/database/repositories/UserRepository')} ctx.userRepository
 */
module.exports = ({userRepository}) => ({
    find: async(filter) => {
        return userRepository.find(filter);
    },
    findOne: async(filter) => {
        return userRepository.findOne(filter);
    }
})