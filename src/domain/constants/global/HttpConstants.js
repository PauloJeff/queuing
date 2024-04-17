module.exports = ({
    code: {
        //2xx
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NO_CONTENT: 204,

        //4xx
        BAD_REQUEST: 400,
        NOT_FOUND: 404,

        //5xx
        INTERNAL_SERVER_ERROR: 500
    },
    message: {
        //2xx
        OK: 'Ok',
        CREATED: 'Created',
        ACCEPTED: 'Accepted',
        NO_CONTENT: 'No Content',

        //4xx
        BAD_REQUEST: 'Bad Request',
        NOT_FOUND: 'Not Found',

        //5xx
        INTERNAL_SERVER_ERROR: 'Internal Server Error'
    }
});
