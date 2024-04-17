const joi = require('joi');
const userLinkSchema = require('src/interfaces/http/schemas/user/UserLinkSchema'); // Substitua pelo caminho correto do seu módulo

describe('Joi Schema', () => {
    let validate;

    beforeEach(() => {
        validate = userLinkSchema();
    });

    it('should validate data correctly', () => {
        const data = { href: 'http://domain/api/user/1' };

        const { error, value } = validate.validate(data);

        expect(error).toBeUndefined();
        expect(value).toEqual(data);
    });

    it('should return validation error when data is invalid', () => {
        const data = { href: 'invalid uri' };

        const { error } = validate.validate(data);

        expect(error).toBeDefined();
        expect(error.details[0].message).toEqual('"href" must be a valid uri');
    });
});
