const NotFoundException = require('src/infra/exceptions/NotFoundException');

/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/domain/constants/global/HttpConstants')} ctx.httpConstants
 */

module.exports = ({httpConstants}) => {
    return(_req, _res, next) => {
        next(new NotFoundException(httpConstants.message.NOT_FOUND));
    };
};
