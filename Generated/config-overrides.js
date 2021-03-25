const path = require('path');

module.exports = {
    paths: function(paths, env) {
        paths.appIndexJs = path.resolve(__dirname, 'Resources/Master.js');
        paths.appSrc = path.resolve(__dirname, 'Resources');
        return paths;
    },
}