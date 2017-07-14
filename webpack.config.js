/* eslint-disable */
module.exports = (env) => env.prod ?
    require('./webpack.config.prod.js') : require('./webpack.config.dev.js');

