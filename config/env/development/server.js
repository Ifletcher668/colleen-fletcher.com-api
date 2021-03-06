module.exports = ({env}) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    cron: {
        enabled: false,
    },
    admin: {
        url: '/dashboard',
        auth: {
            secret: env('ADMIN_JWT_SECRET', ''),
        },
    },
});
