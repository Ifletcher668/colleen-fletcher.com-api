module.exports = {
    webpack: (config, _webpack) => {
        // delete config.resolve.alias['react-dom'];
        config.resolve.alias['react-quill'];
        return config;
    },
};
