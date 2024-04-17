const userHateoas = require('src/interfaces/http/presentations/user/UserHateoas');
const userSerializer = require('src/interfaces/http/presentations/user/UserSerializer'); // Substitua pelo caminho correto do seu módulo

describe('User Serializer', () => {
    let serialize;
    let userHateoasMock;

    beforeEach(() => {
        userHateoasMock = { generate: jest.fn() };
        serialize = userSerializer({ userHateoas: userHateoasMock }).serialize;
    });

    it('should serialize single user data correctly', () => {
        const data = { id: '1', name: 'John Doe', email: 'john.doe@example.com', age: '30', created_at: '2022-01-01', updated_at: '2022-01-02' };
        const links = { find: { href: 'http://localhost:3000/api/users/1' } };
        userHateoasMock.generate.mockReturnValue(links);

        const result = serialize(data);

        expect(result).toEqual({ ...data, links });
        expect(userHateoasMock.generate).toHaveBeenCalledWith({ id: data.id });
    });

    it('should serialize multiple user data correctly', () => {
        const data = [
            { id: '1', name: 'John Doe', email: 'john.doe@example.com', age: '30', created_at: '2022-01-01', updated_at: '2022-01-02' },
            { id: '2', name: 'Jane Doe', email: 'jane.doe@example.com', age: '25', created_at: '2022-01-01', updated_at: '2022-01-02' }
        ];
        const links = { find: { href: 'http://localhost:3000/api/users/1' } };
        userHateoasMock.generate.mockReturnValue(links);

        const result = serialize(data);

        expect(result).toEqual(data.map(user => ({ ...user, links })));
        expect(userHateoasMock.generate).toHaveBeenCalledTimes(data.length);
    });
});
