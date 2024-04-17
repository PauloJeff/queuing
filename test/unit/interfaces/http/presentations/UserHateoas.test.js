const linkGenerator = require('src/interfaces/http/presentations/user/UserHateoas'); // Substitua pelo caminho correto do seu módulo

describe('Link Generator', () => {
    let generate;

    beforeEach(() => {
        generate = linkGenerator().generate;
    });

    it('should generate links correctly', () => {
        const id = '1';
        const expectedOutput = {
            find: {
                href: `http://localhost:3000/api/users/${id}`
            },
            update: {
                href: `http://localhost:3000/api/users/${id}`
            },
            delete: {
                href: `http://localhost:3000/api/users/${id}`
            }
        };

        const result = generate({ id });

        expect(result).toEqual(expectedOutput);
    });
});
