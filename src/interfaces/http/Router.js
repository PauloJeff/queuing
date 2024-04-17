const cors = require('cors');
const {Router} = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');
const boolParser = require('express-query-boolean');

/**
 * 
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/interfaces/http/middlewares/NotFoundMiddleware')} ctx.notFoundMiddleware
 * @param {import('src/interfaces/http/middlewares/HttpErrorMiddleware')} ctx.httpErrorMiddleware
 * @param {import('src/interfaces/http/RouterRegister')} ctx.routerRegister
 * @param {import('src/domain/enums/global/ScopeEnum')} ctx.scopeEnum
 */
module.exports = (ctx) => {
    const apiRouter = Router();
    const routes = Object.keys(ctx)
        .filter((key) => key.includes(ctx.scopeEnum.ROUTE_SUFFIX) && Array.isArray(ctx[key]))
        .flatMap((key) => ctx[key])
    
    apiRouter
        .use(methodOverride('X-HTTP-Method-Override'))
        .use(cors())
        .use(bodyParser.json())
        .use(boolParser())
        .use(compression())
        .use('/api', ctx.routerRegister.register(routes))
        .use(ctx.notFoundMiddleware)
        .use(ctx.httpErrorMiddleware);
    
    return apiRouter;
}