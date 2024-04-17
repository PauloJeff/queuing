/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/infra/database/repositories/UserRepository')} ctx.userRepository
 */
module.exports = ({userRepository}) => ({
    deleteOne: async(filter) => {
        return userRepository.deleteOne(filter);
    }
})