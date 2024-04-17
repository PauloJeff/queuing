const Exception = require('src/interfaces/http/errors/Exception');

describe('src :: interfaces :: http :: errors :: Exception', () => {
    let httpConstants, exception;
    const details = [{message: '"field is required', path: ['field']}];
    const error = {error_code: '500', message: 'Error message', stack: 'Error: Error message\n ...'};

    beforeEach(() => {
        httpConstants = {
            code: {
                BAD_REQUEST: 400,
                NOT_FOUND: 404,
                INTERNAL_SERVER_ERROR: 500
            }
        };
        exception = Exception({httpConstants});
    });

    describe('#contract', () => {
        it('Should be successfully called', () => {
            const expected = {
                error_code: '500',
                status_code: 400,
                message: 'Error message',
                details: [],
                stack_trace: 'Error: Error message\n ...'
            };

            const result = exception.contract(error);

            expect(result).toEqual(expected);
        });

        it('Should be successfully called', () => {
            const expected = {
                error_code: '500',
                status_code: 400,
                message: 'Error message',
                details,
                stack_trace: 'Error: Error message\n ...'
            };

            const result = exception.contract({...error, details});

            expect(result).toEqual(expected);
        });
    });

    describe('#notFound', () => {
        it('Should be successfully called', () => {
            const expected = {
                error_code: '500',
                status_code: 404,
                message: 'Error message',
                details: undefined,
                stack_trace: 'Error: Error message\n ...'
            };

            const result = exception.notFound(error);

            expect(result).toEqual(expected);
        });
    });

    describe('#operation', () => {
        it('Should be successfully called', () => {
            const expected = {
                error_code: '500',
                status_code: 500,
                message: 'Error message',
                stack_trace: 'Error: Error message\n ...'
            };

            const result = exception.operation(error);

            expect(result).toEqual(expected);
        });
    });
});
