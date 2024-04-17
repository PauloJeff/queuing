const UserController = require('src/interfaces/http/presentations/user/UserController');
const asyncMiddleware = require('src/interfaces/http/middlewares/AsyncMiddleware')();

describe('src :: interfaces :: http : presentations :: user :: UserController', () => {
    describe('#create', () => {
        const expected = {
            id: '1',
            name: 'Jhon Doe',
            email: 'jhon_doe@email.com',
            age: '35',
            created_at: '2023-06-20T20:00:00.939Z',
            updated_at: '2023-06-20T20:00:00.939Z',
            links: {
                find:{
                    href: 'https://localhost:3000/api/users/1'
                },
                update: {
                    href: 'https://localhost:3000/api/users/1'
                },
                delete: {
                    href: 'https://localhost:3000/api/users/1'
                }
            }
        };
        let userCreateOperation,
            userSerializer,
            container,
            body,
            json,
            status,
            res,
            httpConstants,
            userController;
        
        beforeEach(() => {
            userCreateOperation = {create: jest.fn().mockReturnValue(expected)};
            userSerializer = {serialize: jest.fn().mockReturnValue(expected)};
            container = {cradle: {userCreateOperation, userSerializer}};
            body = {
                name: 'Jhon Doe',
                email: 'jhon_doe@email.com',
                age: '35',
            };
            json = jest.fn().mockReturnValue(expected);
            status = jest.fn().mockReturnValue({json});
            res = {status};
            httpConstants = {code: {CREATED: 201}};
            userController = UserController({httpConstants, asyncMiddleware});
        });

        it('Should be Successfully called', async () => {
            const response = await userController.create({container, body, res});

            expect(userCreateOperation.create).toHaveBeenCalledTimes(1);
            expect(userCreateOperation.create).toHaveBeenCalledWith(body);
            expect(userSerializer.serialize).toHaveBeenCalledTimes(1);
            expect(userSerializer.serialize).toHaveBeenCalledWith(expected);
            expect(status).toHaveBeenCalledTimes(1);
            expect(status).toHaveBeenCalledWith(httpConstants.code.CREATED);
            expect(json).toHaveBeenCalledTimes(1);
            expect(json).toHaveBeenCalledWith(expected);
            expect(response).toEqual(expected);
        });
    });

    describe('#find', () => {
        const expected = [{
            id: 1,
            name: 'Jhon Doe',
            email: 'jhon_doe@email.com',
            age: '35',
            created_at: '2023-06-20T20:00:00.939Z',
            updated_at: '2023-06-20T20:00:00.939Z'
        }];
        let userFindOperation,
            userSerializer,
            container,
            query,
            json,
            status,
            res,
            httpConstants,
            userController;
        
        beforeEach(() => {
            userFindOperation = {find: jest.fn().mockReturnValue(expected)};
            userSerializer = {serialize: jest.fn().mockReturnValue(expected)};
            container = {cradle: {userFindOperation, userSerializer}};
            query = {};
            json = jest.fn().mockReturnValue(expected);
            status = jest.fn().mockReturnValue({json});
            res = {status};
            httpConstants = {code: {CREATED: 201}};
            userController = UserController({httpConstants, asyncMiddleware});
        });

        it('Should be Successfully called', async () => {
            const response = await userController.find({container, query, res});

            expect(userFindOperation.find).toHaveBeenCalledTimes(1);
            expect(userFindOperation.find).toHaveBeenCalledWith(query);
            expect(userSerializer.serialize).toHaveBeenCalledTimes(1);
            expect(userSerializer.serialize).toHaveBeenCalledWith(expected);
            expect(status).toHaveBeenCalledTimes(1);
            expect(status).toHaveBeenCalledWith(httpConstants.code.OK);
            expect(json).toHaveBeenCalledTimes(1);
            expect(json).toHaveBeenCalledWith(expected);
            expect(response).toEqual(expected);
        });
    });

    describe('#findOne', () => {
        const expected = {
            id: '1',
            name: 'Jhon Doe',
            email: 'jhon_doe@email.com',
            age: '35',
            created_at: '2023-06-20T20:00:00.939Z',
            updated_at: '2023-06-20T20:00:00.939Z',
            links: {
                find:{
                    href: 'https://localhost:3000/api/users/1'
                },
                update: {
                    href: 'https://localhost:3000/api/users/1'
                },
                delete: {
                    href: 'https://localhost:3000/api/users/1'
                }
            }
        };
        let userFindOperation,
            userSerializer,
            container,
            query,
            json,
            status,
            res,
            httpConstants,
            userController;
        
        beforeEach(() => {
            userFindOperation = {findOne: jest.fn().mockReturnValue(expected)};
            userSerializer = {serialize: jest.fn().mockReturnValue(expected)};
            container = {cradle: {userFindOperation, userSerializer}};
            params = {id: 1};
            json = jest.fn().mockReturnValue(expected);
            status = jest.fn().mockReturnValue({json});
            res = {status};
            httpConstants = {code: {OK: 200}};
            userController = UserController({httpConstants, asyncMiddleware});
        });

        it('Should be Successfully called', async () => {
            const response = await userController.findOne({container, params, res});

            expect(userFindOperation.findOne).toHaveBeenCalledTimes(1);
            expect(userFindOperation.findOne).toHaveBeenCalledWith(params);
            expect(userSerializer.serialize).toHaveBeenCalledTimes(1);
            expect(userSerializer.serialize).toHaveBeenCalledWith(expected);
            expect(status).toHaveBeenCalledTimes(1);
            expect(status).toHaveBeenCalledWith(httpConstants.code.OK);
            expect(json).toHaveBeenCalledTimes(1);
            expect(json).toHaveBeenCalledWith(expected);
            expect(response).toEqual(expected);
        });
    });

    describe('#updateOne', () => {
        let userUpdateOperation,
            container,
            body,
            params,
            end,
            status,
            res,
            httpConstants,
            userController;
        
        beforeEach(() => {
            userUpdateOperation = {updateOne: jest.fn()};
            container = {cradle: {userUpdateOperation}};
            params = {id: 1};
            body = {
                name: 'Jhon Doe',
                email: 'jhon_doe@email.com',
                age: '35',
            };
            end = jest.fn();
            status = jest.fn().mockReturnValue({end});
            res = {status};
            httpConstants = {code: {NO_CONTENT: 204}};
            userController = UserController({httpConstants, asyncMiddleware});
        });

        it('Should be Successfully called', async () => {
            const response = await userController.updateOne({container, params, body, res});

            expect(userUpdateOperation.updateOne).toHaveBeenCalledTimes(1);
            expect(userUpdateOperation.updateOne).toHaveBeenCalledWith(params, body);
            expect(status).toHaveBeenCalledTimes(1);
            expect(status).toHaveBeenCalledWith(httpConstants.code.NO_CONTENT);
            expect(response).toBeUndefined();
        });
    });
    
    describe('#deleteOne', () => {
        let userDeleteOperation,
            container,
            body,
            params,
            end,
            status,
            res,
            httpConstants,
            userController;
        
        beforeEach(() => {
            userDeleteOperation = {deleteOne: jest.fn()};
            container = {cradle: {userDeleteOperation}};
            params = {id: 1};
            end = jest.fn();
            status = jest.fn().mockReturnValue({end});
            res = {status};
            httpConstants = {code: {NO_CONTENT: 204}};
            userController = UserController({httpConstants, asyncMiddleware});
        });

        it('Should be Successfully called', async () => {
            const response = await userController.deleteOne({container, params, res});

            expect(userDeleteOperation.deleteOne).toHaveBeenCalledTimes(1);
            expect(userDeleteOperation.deleteOne).toHaveBeenCalledWith(params);
            expect(status).toHaveBeenCalledTimes(1);
            expect(status).toHaveBeenCalledWith(httpConstants.code.NO_CONTENT);
            expect(response).toBeUndefined();
        });
    });
})