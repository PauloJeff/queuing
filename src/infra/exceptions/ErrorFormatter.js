const formatError = (error) => (typeof error === 'string' ? {message: error} : error);

const formatErrorMessage = (err, params) => (typeof err.message === 'function' ? err.message(...params) : err.message)

const formatErrorCode = (errorCode, defaultErrorCode) => {
    if(errorCode && /-/.test(errorCode)) return errorCode;

    return `${errorCode || defaultErrorCode}`;
}

module.exports = {formatError, formatErrorMessage, formatErrorCode};