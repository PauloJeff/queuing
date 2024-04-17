const enumFactory = require('src/domain/factories/global/EnumFactory');

describe('domain :: factories :: global :: EnumFactory', () => {
    let result;

    describe('When the factory is called', () => {
        it('Should be sucessfully called', () => {

            const expected = {
                values: expect.any(Function),
                keys: expect.any(Function),
                key: expect.any(Function),
                KEY: 'value'
            };
            
            result = enumFactory({KEY: 'value'});

            expect(result).toEqual(expected);
        });
    });

    describe('When the factory is called', () => {
        it('Should be sucessfully called', () => {
            const expected = ['value'];
            const data = result.values();

            expect(data).toEqual(expected);
        });
    });

    describe('When the factory is called', () => {
        it('Should be sucessfully called', () => {
            const expected = ['KEY'];
            const data = result.keys();

            expect(data).toEqual(expected);
        });
    });

    describe('When the factory is called', () => {
        it('Should be sucessfully called', () => {
            const expected = 'KEY'
            const data = result.key('value');

            expect(data).toEqual(expected);
        });
    });
});