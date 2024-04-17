const ContractException = require('src/infra/exceptions/ContractException');

describe('src :: infra :: exceptions ::ContractException', () => {
    describe('When the error has details', () => {
        const error = Object.assign(new Error('Some error'), {details: []});

        it('Should be succesfully called', () => {
            const exception = new ContractException(error);

            expect(exception.error_type).toEqual('contract');
            expect(exception.details).toEqual([]);
            expect(exception).toEqual(error);
        });
    });

    describe('When the error has no details', () => {
        const error = Object.assign(new Error('Some error'));

        it('Should be succesfully called', () => {
            const exception = new ContractException(error);

            expect(exception.error_type).toEqual('contract');
            expect(exception.details).toBeUndefined();
            expect(exception).toEqual(error);
        });
    });
});