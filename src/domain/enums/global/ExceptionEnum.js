const enumFactory = require('src/domain/factories/global/EnumFactory');

module.exports = () =>
    enumFactory({
        400: 'contract',
        404: 'notFound',
        500: 'operation'
    });
