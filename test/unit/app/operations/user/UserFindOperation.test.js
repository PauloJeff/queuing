const UserFindOperation = require('src/app/operations/user/UserFindOperation');

describe('src :: app :: operations :: user :: UserFindOperation', () => {
    describe('#find', () => {
        const expected = true;
        let userFindServiceMock;
        let userFindOperation;
        const data = {id: 1};

        beforeEach(() => {
            userFindServiceMock = {
                find: jest.fn().mockReturnValue(expected)
            };
            userFindOperation = UserFindOperation({ userFindService: userFindServiceMock });
        });

        it('should create a user correctly', async () => {
            const result = await userFindOperation.find(data);

            expect(result).toEqual(expected);
            expect(userFindServiceMock.find).toHaveBeenCalledWith(data);
        });
    });

    describe('#findOne', () => {
        const expected = true;
        let userFindServiceMock;
        let userFindOperation;
        const data = {id: 1};

        beforeEach(() => {
            userFindServiceMock = {
                findOne: jest.fn().mockReturnValue(expected)
            };
            userFindOperation = UserFindOperation({ userFindService: userFindServiceMock });
        });

        it('should create a user correctly', async () => {
            const result = await userFindOperation.findOne(data);

            expect(result).toEqual(expected);
            expect(userFindServiceMock.findOne).toHaveBeenCalledWith(data);
        });
    });
});
