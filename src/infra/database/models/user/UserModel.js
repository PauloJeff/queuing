const { DataTypes} = require('sequelize');

/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/infra/database/Database')} ctx.database
 */
module.exports = ({providerConnection}) => {
    const User = providerConnection.getSequelize().define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: DataTypes.TEXT,
        email: DataTypes.TEXT,
        age: DataTypes.INTEGER
    },
    {
        paranoid: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    });

    return User;
};
