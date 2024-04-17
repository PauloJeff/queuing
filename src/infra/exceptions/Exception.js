const {formatError, formatErrorMessage, formatErrorCode} = require('./ErrorFormatter');

module.exports = class Exception extends Error {
    constructor(error, defaultErrorCode, ...params) {
        const err = formatError(error);
        const message = formatErrorMessage(err, params);
        
        super(message);
        this.error_code = formatErrorCode(err.error_code, defaultErrorCode);
        this.params = params
    }
}