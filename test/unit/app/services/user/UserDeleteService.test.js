const UserDeleteService = require('src/app/services/user/UserDeleteService');

describe('src :: app :: services :: user :: UserDeleteService', () => {
    const expected = true;
    let userRepositoryMock;
    let userDeleteService;
    const data = {id: 1};

    beforeEach(() => {
        userRepositoryMock = {
            deleteOne: jest.fn().mockReturnValue(expected)
        };
        userDeleteService = UserDeleteService({ userRepository: userRepositoryMock });
    });

    it('should delete a user correctly', async () => {
        const result = await userDeleteService.deleteOne(data);

        expect(result).toEqual(expected);
        expect(userRepositoryMock.deleteOne).toHaveBeenCalledWith(data);
    });
});
