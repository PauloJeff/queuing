const UserCreateOperation = require('src/app/operations/user/UserCreateOperation');

describe('src :: app :: operations :: user :: UserCreateOperation', () => {
    const expected = true;
    let userCreateServiceMock;
    let userCreateOperation;
    const data = { name: 'John Doe', email: 'john.doe@example.com', age: 30 };

    beforeEach(() => {
        userCreateServiceMock = {
            create: jest.fn().mockReturnValue(expected)
        };
        userCreateOperation = UserCreateOperation({ userCreateService: userCreateServiceMock });
    });

    it('should create a user correctly', async () => {
        const result = await userCreateOperation.create(data);

        expect(result).toEqual(expected);
        expect(userCreateServiceMock.create).toHaveBeenCalledWith(data);
    });
});
