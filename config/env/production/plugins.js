module.exports = ({env}) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
        },
    },
    comments: {
        enableUsers: false,
        badWords: false,
        // moderatorRoles: ["Authenticated"],
        relatedContentTypes: {
            blog_posts: {
                uuid: 'application::blog_posts.blog_posts',
                __contentType: '',
                contentManager: true,
                key: 'comments',
                value: 'id'
            }
        }
      },
});
