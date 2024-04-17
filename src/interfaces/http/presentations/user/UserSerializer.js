/**
 * @param {Object} ctx - Dependency Injection
 * @param {import('src/interfaces/http/presentations/user/UserHateoas')} ctx.userHateoas
 */
module.exports = ({userHateoas}) => {
    const parse = ({
        id,
        name,
        email,
        age,
        created_at,
        updated_at,
        deleted_at
    }) => ({
        id,
        name,
        email,
        age,
        created_at,
        updated_at,
        links: userHateoas.generate({id})
    });

    return {
        serialize: (data) => {
            if(!Array.isArray(data)) {
                return parse(data);
            }
            const parsed = data.map(parse);

            return parsed;
        }
    };
}