const NotFoundException = require('src/infra/exceptions/NotFoundException');

/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/infra/database/models/UserModel')} ctx.userModel
 */
module.exports = ({userModel}) => ({
    create: async function(data) {
        const result = await userModel.create(data);
        
        return result;
    },
    find: async function(filter) {
        const result = await userModel.findAll();

        return result;
    },
    findOne: async function(filter) {
        const result = await userModel.findByPk(filter.id);
        if(!result) {
            throw new NotFoundException('Not found', 'user not found');
        }

        return result;
    },
    updateOne: async function (filter, data) {
        const user = await userModel.findByPk(filter.id);
        if(!user) {
            throw new NotFoundException('Not found', 'user not found');
        }
        const result = await userModel.update(
            data,
            {
                where: {
                    id: filter.id
                },
            }
        );

        return result;
    },
    deleteOne: async function(filter) {
        const user = await userModel.findByPk(filter.id);
        if(!user) {
            throw new NotFoundException('Not found', 'user not found');
        }

        const result = await userModel.destroy({
                where: {
                    id: filter.id
                },
            }
        );

        return result;
    }
});