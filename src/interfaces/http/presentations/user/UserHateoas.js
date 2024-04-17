module.exports = () => ({
    generate: ({id}) => ({
        find: {
            href: new URL(`api/users/${id}`, 'http://localhost:3000').href
        },
        update: {
            href: new URL(`api/users/${id}`, 'http://localhost:3000').href
        },
        delete: {
            href: new URL(`api/users/${id}`, 'http://localhost:3000').href
        },
    })
});
