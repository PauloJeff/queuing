const ContractException = require('src/infra/exceptions/ContractException');
const ValidatorMiddleware = require('src/interfaces/http/middlewares/ValidatorMiddleware');

jest.mock('src/infra/exceptions/ContractException');

describe('src :: interfaces :: http :: middlewares :: ValidatorMiddleware', () => {
    describe('#validate', () => {
        let validate, schemas, req, next, validatorMiddleware, fn;
        const options = {abortEarly: false, convert: false, allowUnknown: true, stripUnknown: true};
        const error = new Error('Bad Request');

        describe('When the validate middleware is called', () => {
            beforeEach(() => {
                validate = jest.fn();
                schemas = {params: {validate}, query: {validate}};
                req = {params: {type: 'openapi'}, query: {download: false}};
                next = jest.fn();
                validatorMiddleware = ValidatorMiddleware();
            });

            it('Should be successfully called', () => {
                const expected = expect.any(Function);

                fn = validatorMiddleware.validate(schemas);

                expect(fn).toEqual(expected);
            });
        });

        describe('When the Method is called and receive all the necessary attributes', () => {
            beforeEach(() => {
                validate.mockReturnValueOnce({value: req.params}).mockReturnValueOnce({value: req.query});
            });

            it('Should be successfully called', () => {
                const result = fn(req, null, next);
                
                expect(validate).toHaveBeenCalledTimes(2);
                expect(validate).toHaveBeenCalledWith(req.params, options);
                expect(validate).toHaveBeenCalledWith(req.query, options);
                expect(ContractException).not.toHaveBeenCalledWith();
                expect(next).toHaveBeenCalledTimes(1);
                expect(result).toBeUndefined();
            });
        });

        describe('When the Method is called and does not receive all the necessary attributes', () => {
            beforeEach(() => {
                validate.mockReturnValue(({error}));
                ContractException.mockReturnValue(error);
            });

            it('Should be called and throw an error', () => {
                try {
                    fn(req, null, next);
                } catch {
                    expect(validate).toHaveBeenCalledTimes(1);
                    expect(validate).toHaveBeenCalledWith(req.params, options);
                    expect(ContractException).toHaveBeenCalledTimes(1);
                    expect(ContractException).toHaveBeenCalledWith(error);
                    expect(next).toHaveBeenCalledTimes(1);
                    expect(next).toHaveBeenCalledWith(error);
                    expect(result).toEqual(error);
                }
            });
        });
    });
})