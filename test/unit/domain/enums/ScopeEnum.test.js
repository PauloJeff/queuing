const scopeEnum = require('src/domain/enums/global/ScopeEnum')();

describe('domain :: enums :: global :: ExceptionEnum', () => {
    describe('#values', () => {
        it('Should return enum values', () => {
            const expected = ['Routes', 'Model'];
            const result = scopeEnum.values();

            expect(result).toHaveLength(2);
            expect(result).toEqual(expected);
        });
    });

    describe('#keys', () => {
        it('Should return enum keys', () => {
            const expected = ['ROUTE_SUFFIX', 'MODELS_SUIFFIX'];
            const result = scopeEnum.keys();

            expect(result).toHaveLength(2);
            expect(result).toEqual(expected);
        });
    });

    describe('#keys', () => {
        it('Should return enum key', () => {
            const expected = 'ROUTE_SUFFIX'
            const result = scopeEnum.key('Routes');

            expect(result).toEqual(expected);
        });
    });
});
