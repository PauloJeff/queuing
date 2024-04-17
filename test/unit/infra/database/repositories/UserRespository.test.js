const NotFoundException = require('src/infra/exceptions/NotFoundException');
const UserRepository = require('src/infra/database/repositories/UserRepository'); // Substitua pelo caminho correto do seu módulo

describe('src :: infra :: database :: repositories :: UserRepository', () => {
    let userModelMock;
    let userModule;

    beforeEach(() => {
        userModelMock = {
            create: jest.fn(),
            findAll: jest.fn(),
            findByPk: jest.fn(),
            update: jest.fn(),
            destroy: jest.fn()
        };
        userModule = UserRepository({ userModel: userModelMock });
    });

    it('should create a user correctly', async () => {
        const data = { name: 'John Doe', email: 'john.doe@example.com', age: 30 };
        userModelMock.create.mockResolvedValue(data);

        const result = await userModule.create(data);

        expect(result).toEqual(data);
        expect(userModelMock.create).toHaveBeenCalledWith(data);
    });

    it('should find all users correctly', async () => {
        const data = [{ name: 'John Doe', email: 'john.doe@example.com', age: 30 }];
        userModelMock.findAll.mockResolvedValue(data);
    
        const result = await userModule.find();
    
        expect(result).toEqual(data);
        expect(userModelMock.findAll).toHaveBeenCalled();
    });
    
    it('should find one user correctly', async () => {
        const data = { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30 };
        userModelMock.findByPk.mockResolvedValue(data);
    
        const result = await userModule.findOne({ id: 1 });
    
        expect(result).toEqual(data);
        expect(userModelMock.findByPk).toHaveBeenCalledWith(1);
    });
    
    it('should throw NotFoundException when user not found in find', async () => {
        userModelMock.findByPk.mockResolvedValue(null);
    
        await expect(userModule.findOne({ id: 1 })).rejects.toThrow(NotFoundException);
        expect(userModelMock.findByPk).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException when user not found in update', async () => {
        userModelMock.findByPk.mockResolvedValue(null);
    
        await expect(userModule.updateOne({ id: 1 })).rejects.toThrow(NotFoundException);
        expect(userModelMock.findByPk).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException when user not found in delete', async () => {
        userModelMock.findByPk.mockResolvedValue(null);
    
        await expect(userModule.deleteOne({ id: 1 })).rejects.toThrow(NotFoundException);
        expect(userModelMock.findByPk).toHaveBeenCalledWith(1);
    });
    
    it('should update one user correctly', async () => {
        const data = { name: 'John Doe', email: 'john.doe@example.com', age: 30 };
        userModelMock.findByPk.mockResolvedValue(data);
        userModelMock.update.mockResolvedValue([1]);
    
        const result = await userModule.updateOne({ id: 1 }, data);
    
        expect(result).toEqual([1]);
        expect(userModelMock.update).toHaveBeenCalledWith(data, { where: { id: 1 } });
    });
    
    it('should delete one user correctly', async () => {
        const data = { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30 };
        userModelMock.findByPk.mockResolvedValue(data);
        userModelMock.destroy.mockResolvedValue(1);
    
        const result = await userModule.deleteOne({ id: 1 });
    
        expect(result).toEqual(1);
        expect(userModelMock.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
    });
    
});
