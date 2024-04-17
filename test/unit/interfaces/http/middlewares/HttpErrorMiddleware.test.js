const HttpErrorMiddleware = require('src/interfaces/http/middlewares/HttpErrorMiddleware');

describe('src :: interfaces :: http :: middlewares :: HttpErrorMiddleware', () => {
    let json, status, exceptionEnum, exception, httpErrorMiddleware;
    const error = Object.assign(new Error('Some error'), {status_code: 500, stack_trace: 'Error: Error message\n ...'});
    describe('When the middleware is called', () => {
        beforeEach(() => {
            json = jest.fn();
            status = jest.fn();
            res = {status};
            exceptionEnum = {500: 'operation'};
            exception = {operation: jest.fn()};
        });

        it('Should be successfully called', () => {
            const expected = expect.any(Function);

            httpErrorMiddleware = HttpErrorMiddleware({exceptionEnum, exception});

            expect(httpErrorMiddleware).toEqual(expected);
        });
    });

    describe('When the middleware is called', () => {
        beforeEach(() => {
            json.mockReturnValue(error);
            status.mockReturnValue({json});
            exception.operation.mockReturnValue(error);
        });

        it('Should be successfully called', () => {
            const result = httpErrorMiddleware(error, undefined, res, undefined);

            expect(exception.operation).toHaveBeenCalledTimes(1);
            expect(exception.operation).toHaveBeenCalledWith(error);
            expect(status).toHaveBeenCalledTimes(1);
            expect(status).toHaveBeenCalledWith(error.status_code);
            expect(json).toHaveBeenCalledTimes(1);
            expect(json).toHaveBeenCalledWith({details: []});
            expect(result).toEqual(error);
        });
    });
});