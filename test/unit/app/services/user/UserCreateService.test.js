const UserCreateService = require('src/app/services/user/UserCreateService');

describe('src :: app :: operations :: user :: UserCreateOperation', () => {
    const expected = true;
    let userRepositoryMock;
    let userCreateService;
    const data = { name: 'John Doe', email: 'john.doe@example.com', age: 30 };

    beforeEach(() => {
        userRepositoryMock = {
            create: jest.fn().mockReturnValue(expected)
        };
        userCreateService = UserCreateService({ userRepository: userRepositoryMock });
    });

    it('should create a user correctly', async () => {
        const result = await userCreateService.create(data);

        expect(result).toEqual(expected);
        expect(userRepositoryMock.create).toHaveBeenCalledWith(data);
    });
});
