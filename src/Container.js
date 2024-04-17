const {createContainer, asClass, asFunction, asValue, InjectionMode, Lifetime} = require('awilix');
const HttpConstants = require('./domain/constants/global/HttpConstants');
const UserModel = require('./infra/database/models/user/UserModel');
const Router = require('./interfaces/http/Router');
const Server = require('./interfaces/http/Server');
const ProviderConnection = require('./infra/database/Database');

module.exports = {
    container: createContainer(),
    configureContainer: function (config) {
        this.container
            .register({
                providerConnection: asClass(ProviderConnection).singleton(),
                httpConstants: asValue(HttpConstants),
                userModel: asFunction(UserModel),
                server: asClass(Server).singleton(),
                router: asFunction(Router),
                container: asValue(this.container),
                config: asValue(config)
            })
            .loadModules(
                [
                    'src/app/operations/**/*.js',
                    'src/app/services/**/*.js',
                    'src/domain/enums/**/*.js',
                    'src/domain/constants/**/*.js',
                    'src/domain/factories/**/*.js',
                    'src/domain/schemas/**/*.js',
                    [
                        'src/infra/database/models/**/*.js',
                        {
                            lifetime: Lifetime.SINGLETON
                        }
                    ],
                    'src/infra/exceptions/*.js',
                    'src/infra/database/repositories/**/*.js',
                    'src/interfaces/http/errors/**/*.js',
                    'src/interfaces/http/middlewares/*.js',
                    'src/interfaces/http/presentations/**/*.js',
                    'src/interfaces/http/schemas/**/*.js',
                    'src/interfaces/http/RouterRegister.js'
                ],
                {
                    formatName: 'camelCase',
                    resolverOptions: {
                        injectionMode: InjectionMode.PROXY
                    }
                }
            );
        
        return this.container
    }
}