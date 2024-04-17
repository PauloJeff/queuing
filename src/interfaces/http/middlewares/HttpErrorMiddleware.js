/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/domain/enums/global/ExceptionEnum')} ctx.exceptionEnum
 * @param {import('src/interfaces/http/errors/Exception')} ctx.exception
 */
module.exports = ({exceptionEnum, exception}) => {
    return(err, _req, res, _next) => {
        const errorCode = (err.error_code ?? '').split('-')[1];
        
        const method = exceptionEnum[errorCode] ?? err.error_type ?? exceptionEnum[500];
        
        const {status_code, ...error} = exception[method](err);

        error.details = error.details ?? [];
        error.stack_trace = undefined;

        return res.status(status_code).json(error);
    };
};
