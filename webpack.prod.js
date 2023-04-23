const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    entry: './scripts/site.js',
    plugins: [
        new WorkboxPlugin.InjectManifest({
            swSrc: path.resolve(__dirname, 'src/serviceworker.js'),
            swDest: 'serviceworker.js',
            maximumFileSizeToCacheInBytes: 4 * 1024 * 1024
        })
    ],
    performance: {
        maxEntrypointSize: 2 * 1024 * 1024,
        maxAssetSize: 4 * 1024 * 1024
    }
});
