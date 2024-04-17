const exceptionEnum = require('src/domain/enums/global/ExceptionEnum')();

describe('domain :: enums :: global :: ExceptionEnum', () => {
    describe('#values', () => {
        it('Should return enum values', () => {
            const expected = ['contract', 'notFound', 'operation'];
            const result = exceptionEnum.values();

            expect(result).toHaveLength(3);
            expect(result).toEqual(expected);
        });
    });

    describe('#keys', () => {
        it('Should return enum keys', () => {
            const expected = ['400', '404', '500'];
            const result = exceptionEnum.keys();

            expect(result).toHaveLength(3);
            expect(result).toEqual(expected);
        });
    });

    describe('#keys', () => {
        it('Should return enum key', () => {
            const expected = '400'
            const result = exceptionEnum.key('contract');

            expect(result).toEqual(expected);
        });
    });
});
