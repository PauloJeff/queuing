const {Router} = require('express')

/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/interfaces/http/middlewares/ValidatorMiddleware')} ctx.validatorMiddleware
 */
module.exports = ({validatorMiddleware}) => ({
    register: (routes) => {
        const router = Router();

        for(const {method, path, validation, handler} of routes) {
            const validator = validatorMiddleware.validate(validation);
            
            router[method](path, validator, handler);
        }

        return router;
    }
});
