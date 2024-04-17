/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/domain/constants/global/HttpConstants')} ctx.httpConstants
 */
module.exports = ({ httpConstants }) => ({
    contract: ({error_code, message, details = [], stack}) => ({
        error_code,
        status_code: httpConstants.code.BAD_REQUEST,
        message,
        details: details.map((detail) => ({message: detail.message, path: detail.path})),
        stack_trace: stack
    }),
    notFound: ({error_code, message, details, stack}) => ({
        error_code,
        status_code: httpConstants.code.NOT_FOUND,
        message,
        details,
        stack_trace: stack
    }),
    operation: ({error_code, message, stack}) => ({
        error_code,
        status_code: httpConstants.code.INTERNAL_SERVER_ERROR,
        message,
        stack_trace: stack
    })
})