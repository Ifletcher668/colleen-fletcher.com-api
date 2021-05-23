module.exports = ({env}) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('DEV_CLOUDINARY_NAME'),
            api_key: env('DEV_CLOUDINARY_KEY'),
            api_secret: env('DEV_CLOUDINARY_SECRET'),
        },
    },
});
