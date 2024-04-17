const AsyncMiddleware = require('src/interfaces/http/middlewares/AsyncMiddleware');

describe('Error Handling Middleware', () => {
    it('should catch and pass error to next function', async () => {
        const error = new Error('An error occurred');
        const fn = jest.fn().mockRejectedValue(error);
        const next = jest.fn();
        const ctx = { next };

        const middleware = AsyncMiddleware()(fn);

        await middleware(ctx);

        expect(fn).toHaveBeenCalledWith(ctx);
        expect(next).toHaveBeenCalledWith(error);
    });

    it('should not call next function when no error occurs', async () => {
        const fn = jest.fn().mockResolvedValue('Success');
        const next = jest.fn();
        const ctx = { next };

        const middleware = AsyncMiddleware()(fn);

        await middleware(ctx);

        expect(fn).toHaveBeenCalledWith(ctx);
        expect(next).not.toHaveBeenCalled();
    });
});
