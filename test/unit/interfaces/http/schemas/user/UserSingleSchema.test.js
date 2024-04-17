const joi = require('joi');
const userLinkSchema = joi.object({ href: joi.string().uri().required() });
const userSingleSchema = require('src/interfaces/http/schemas/user/UserSingleSchema'); // Substitua pelo caminho correto do seu módulo

describe('User Schema', () => {
    let validate;

    beforeEach(() => {
        validate = userSingleSchema({ userLinkSchema });
    });

    it('should validate data correctly', () => {
        const data = {
            id: '1',
            name: 'Jhon Doe',
            email: 'jhon_doe@email.com',
            age: '33',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            deleted_at: new Date().toISOString(),
            links: {
                find: { href: 'http://domain/api/user/1' },
                update: { href: 'http://domain/api/user/1' },
                delete: { href: 'http://domain/api/user/1' }
            }
        };

        const { error, value } = validate.validate(data);

        expect(error).toBeUndefined();
        expect(value).toEqual(data);
    });

    it('should return validation error when data is invalid', () => {
        const data = {
            id: '1',
            name: 'Jhon Doe',
            email: 'invalid email', // invalid email
            age: '33',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            deleted_at: new Date().toISOString(),
            links: {
                find: { href: 'http://domain/api/user/1' },
                update: { href: 'http://domain/api/user/1' },
                delete: { href: 'http://domain/api/user/1' }
            }
        };

        const { error } = validate.validate(data);

        expect(error).toBeDefined();
        expect(error.details[0].message).toEqual('"email" must be a valid email');
    });
});
