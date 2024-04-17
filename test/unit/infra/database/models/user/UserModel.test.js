const { DataTypes } = require('sequelize');
const UserModel = require('src/infra/database/models/user/UserModel');

describe('infra :: database :: models :: :: user :: UserModel', () => {
    let sequelizeMock;
    let defineMock;
    let User;

    beforeEach(() => {
        defineMock = jest.fn();
        sequelizeMock = {
            define: defineMock
        };
        const providerConnectionMock = {
            getSequelize: () => sequelizeMock
        };
        User = UserModel({ providerConnection: providerConnectionMock });
    });

    it('should define the User model correctly', () => {
        expect(defineMock).toHaveBeenCalledWith('User', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: DataTypes.TEXT,
            email: DataTypes.TEXT,
            age: DataTypes.INTEGER
        }, {
            paranoid: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at'
        });
    });
});
