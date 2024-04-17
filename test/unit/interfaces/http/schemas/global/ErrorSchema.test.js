const joi = require('joi');
const errorSchema = require('src/interfaces/http/schemas/global/ErrorSchema'); // Substitua pelo caminho correto do seu módulo

describe('Joi Schema', () => {
    let validate;

    beforeEach(() => {
        validate = errorSchema();
    });

    it('should validate data correctly', () => {
        const data = {
            error_code: '500',
            message: 'Error',
            details: [{ message: '"field" is required', path: ['field'] }],
            stack_trace: 'Error: Error message\n ...'
        };

        const { error, value } = validate.validate(data);

        expect(error).toBeUndefined();
        expect(value).toEqual(data);
    });

    it('should return validation error when data is invalid', () => {
        const data = {
            error_code: '500',
            message: 'Error',
            details: [{ message: '"field" is required' }], // path is missing
            stack_trace: 'Error: Error message\n ...'
        };

        const { error } = validate.validate(data);

        expect(error).toBeDefined();
        expect(error.details[0].message).toEqual('"details[0].path" is required');
    });
});
