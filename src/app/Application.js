const container = require("src/Container");
require('dotenv').config();

module.exports = class {
    constructor() {
        this.container = container.configureContainer();
    }

    async start() {
        await this.container.cradle.providerConnection.connect();
        await this.container.cradle.server.init();
    }
};
