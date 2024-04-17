const UserUpdateOperation = require('src/app/operations/user/UserUpdateOperation');

describe('src :: app :: operations :: user :: UserUpdateOperation', () => {
    const expected = true;
    let userUpdateServiceMock;
    let userUpdateOperation;
    const param = { id: 1 };
    const data = { name: 'John Doe', email: 'john.doe@example.com', age: 30 };

    beforeEach(() => {
        userUpdateServiceMock = {
            updateOne: jest.fn().mockReturnValue(expected)
        };
        userUpdateOperation = UserUpdateOperation({ userUpdateService: userUpdateServiceMock });
    });

    it('should create a user correctly', async () => {
        const result = await userUpdateOperation.updateOne(param, data);

        expect(result).toEqual(expected);
        expect(userUpdateServiceMock.updateOne).toHaveBeenCalledWith(param, data);
    });
});
