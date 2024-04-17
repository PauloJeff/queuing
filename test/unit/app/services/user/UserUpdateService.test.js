const UserUpdateService = require('src/app/services/user/UserUpdateService');

describe('src :: app :: operations :: user :: UserCreateOperation', () => {
    const expected = true;
    let userRepositoryMock;
    let userUpdateService;
    const param = { id: 1 };
    const data = { name: 'John Doe', email: 'john.doe@example.com', age: 30 };

    beforeEach(() => {
        userRepositoryMock = {
            updateOne: jest.fn().mockReturnValue(expected)
        };
        userUpdateService = UserUpdateService({ userRepository: userRepositoryMock });
    });

    it('should create a user correctly', async () => {
        const result = await userUpdateService.updateOne(param, data);

        expect(result).toEqual(expected);
        expect(userRepositoryMock.updateOne).toHaveBeenCalledWith(param, data);
    });
});
