const { scopePerRequest } = require('awilix-express');
const express = require('express');
const noCache = require('nocache');
const helmet = require('helmet');

/**
 * @param {Object} ctx - Dependencion Injection
 * @param {import('src/interfaces/http/Router')} ctx.router
 * @param {import('src/Container')} ctx.container
 */
module.exports = class {
    constructor({ container, router }) {
        this.express = express();
        this.express.use(helmet());
        this.express.use(noCache());
        this.express.use(scopePerRequest(container));
        this.express.use(router);
    }

    async init() {
        const port = process.env.PORT || 3000

        return this.express.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        });
    }
};
