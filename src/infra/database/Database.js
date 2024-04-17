const {Sequelize, DataTypes} = require('sequelize');

module.exports = class {
    constructor(ctx) {
        this.ctx = ctx;
        this.sequelize = new Sequelize(
            process.env.DB_NAME,
             process.env.DB_USER,
             process.env.DB_PASSWORD,
             {
              host: process.env.DB_HOST,
              dialect: "mysql",
             }
        );
    }

    async connect(){
        this.sequelize.sync({force: true});
    }

    getSequelize() {
        return this.sequelize;
    }
}