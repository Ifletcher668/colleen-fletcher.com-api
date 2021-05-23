module.exports = ({env}) => ({
    url: env('STAGING_HEROKU_URL'),
    cron: {
        enabled: false,
    },
    admin: {
        url: '/dashboard',
        auth: {
            secret: env('ADMIN_JWT_SECRET'),
        },
    },
});
