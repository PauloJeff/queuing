/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/infra/database/repositories/UserRepository')} ctx.userRepository
 */
module.exports = ({userRepository}) => ({
    create: async(data) => {
        return userRepository.create(data);
    }
})