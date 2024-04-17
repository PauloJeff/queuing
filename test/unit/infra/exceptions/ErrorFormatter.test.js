const { formatError, formatErrorMessage, formatErrorCode } = require('src/infra/exceptions/ErrorFormatter'); // Substitua pelo caminho correto do seu módulo

describe('src :: infra :: exceptions :: ErrorFormatter', () => {
    it('should format error correctly', () => {
        const errorString = 'An error occurred';
        const errorObject = { message: 'An error occurred' };

        expect(formatError(errorString)).toEqual({ message: errorString });
        expect(formatError(errorObject)).toEqual(errorObject);
    });

    it('should format error message correctly', () => {
        const errorMessageFunction = (...params) => params.join(' ');
        const errorMessageString = 'An error occurred';

        expect(formatErrorMessage({ message: errorMessageFunction }, ['An', 'error', 'occurred'])).toEqual(errorMessageString);
        expect(formatErrorMessage({ message: errorMessageString })).toEqual(errorMessageString);
    });

    it('should format error code correctly', () => {
        const errorCodeWithDash = '400-BAD-REQUEST';
        const errorCodeWithoutDash = '400';
        const defaultErrorCode = '500-INTERNAL-SERVER-ERROR';

        expect(formatErrorCode(errorCodeWithDash, defaultErrorCode)).toEqual(errorCodeWithDash);
        expect(formatErrorCode(errorCodeWithoutDash, defaultErrorCode)).toEqual(errorCodeWithoutDash);
        expect(formatErrorCode(undefined, defaultErrorCode)).toEqual(defaultErrorCode);
    });
});
