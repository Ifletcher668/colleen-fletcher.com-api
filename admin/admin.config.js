module.exports = {
    webpack: (config, _webpack) => {
        delete config.resolve.alias['react-dom'];
        return config;
    },
};
