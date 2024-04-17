/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/infra/database/repositories/UserRepository')} ctx.userRepository
 */
module.exports = ({userRepository}) => ({
    updateOne: async(filter, data) => {
        return userRepository.updateOne(filter, data);
    }
})