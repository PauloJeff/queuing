const UserFindService = require('src/app/services/user/UserFindService');

describe('src :: app :: services :: user :: UserFindService', () => {
    const expected = true;
    let userRepositoryMock;
    let userFindService;
    const data = {id: 1};

    beforeEach(() => {
        userRepositoryMock = {
            find: jest.fn().mockReturnValue(expected),
            findOne: jest.fn().mockReturnValue(expected)
        };
        userFindService = UserFindService({ userRepository: userRepositoryMock });
    });
    
    describe('#find', () => {
        it('should find a users correctly', async () => {
            const result = await userFindService.find(data);

            expect(result).toEqual(expected);
            expect(userRepositoryMock.find).toHaveBeenCalledWith(data);
        });
    });

    describe('#findOne', () => {
        it('should find one user correctly', async () => {
            const result = await userFindService.findOne(data);

            expect(result).toEqual(expected);
            expect(userRepositoryMock.findOne).toHaveBeenCalledWith(data);
        });
    });
});
