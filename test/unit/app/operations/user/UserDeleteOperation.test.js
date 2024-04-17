const UserDeleteOperation = require('src/app/operations/user/UserDeleteOperation');

describe('src :: app :: operations :: user :: UserDeleteOperation', () => {
    const expected = true;
    let userDeleteServiceMock;
    let userDeleteOperation;
    const data = {id: 1};

    beforeEach(() => {
        userDeleteServiceMock = {
            deleteOne: jest.fn().mockReturnValue(expected)
        };
        userDeleteOperation = UserDeleteOperation({ userDeleteService: userDeleteServiceMock });
    });

    it('should create a user correctly', async () => {
        const result = await userDeleteOperation.deleteOne(data);

        expect(result).toEqual(expected);
        expect(userDeleteServiceMock.deleteOne).toHaveBeenCalledWith(data);
    });
});
