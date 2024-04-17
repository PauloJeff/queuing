const httpConstants = require('src/domain/constants/global/HttpConstants'); // Substitua pelo caminho correto do seu módulo

describe('HTTP Status Module', () => {
    it('should have correct status codes', () => {
        expect(httpConstants.code.OK).toEqual(200);
        expect(httpConstants.code.CREATED).toEqual(201);
        expect(httpConstants.code.ACCEPTED).toEqual(202);
        expect(httpConstants.code.NO_CONTENT).toEqual(204);
        expect(httpConstants.code.BAD_REQUEST).toEqual(400);
        expect(httpConstants.code.NOT_FOUND).toEqual(404);
        expect(httpConstants.code.INTERNAL_SERVER_ERROR).toEqual(500);
    });

    it('should have correct status messages', () => {
        expect(httpConstants.message.OK).toEqual('Ok');
        expect(httpConstants.message.CREATED).toEqual('Created');
        expect(httpConstants.message.ACCEPTED).toEqual('Accepted');
        expect(httpConstants.message.NO_CONTENT).toEqual('No Content');
        expect(httpConstants.message.BAD_REQUEST).toEqual('Bad Request');
        expect(httpConstants.message.NOT_FOUND).toEqual('Not Found');
        expect(httpConstants.message.INTERNAL_SERVER_ERROR).toEqual('Internal Server Error');
    });
});
