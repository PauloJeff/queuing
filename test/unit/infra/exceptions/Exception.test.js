const {
    formatError,
    formatErrorCode,
    formatErrorMessage
} = require('src/infra/exceptions/ErrorFormatter');
const Exception = require('src/infra/exceptions/Exception');

jest.mock('src/infra/exceptions/ErrorFormatter');

describe('infra :: exceptions :: ErrorFormatter', () => {
    const error = new Error('Some error');
    const formattedErrorCode = '500';
    const errorCode = 500;

    beforeEach(() => {
        formatError.mockReturnValue(error);
        formatErrorCode.mockReturnValue(formattedErrorCode);
        formatErrorMessage.mockReturnValue(error.message);
    });

    it('Should be sucessfully called', () => {
        const exception = new Exception(error, errorCode);

        expect(formatError).toHaveBeenCalledTimes(1);
        expect(formatError).toHaveBeenCalledWith(error);
        expect(formatErrorCode).toHaveBeenCalledTimes(1);
        expect(formatErrorCode).toHaveBeenCalledWith(undefined, errorCode);
        expect(formatErrorMessage).toHaveBeenCalledTimes(1);
        expect(formatErrorMessage).toHaveBeenCalledWith(error, []);
        expect(exception.error_code).toEqual(formattedErrorCode);
        expect(exception.params).toEqual([]);
        expect(exception).toEqual(error);
    });
});