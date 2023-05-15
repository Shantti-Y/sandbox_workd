const modulePath = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const clientConfig = require('./webpack.config.client.js');
const serverConfig = require('./webpack.config.server.js');

const productionConfig = merge(commonConfig, {
	mode: "production",
	output: { filename: '[name].js' },
	plugins: [new CompressionPlugin({ filename: '[path].gz[query]' })]
});

const distDir = '../dist';

const productionServerConfig = merge(
	productionConfig,
	serverConfig,
	{ output: { path: modulePath.resolve(__dirname, `${distDir}`) } }
);

const publicDir = '../dist/public';

const productionClientConfig = merge(
	productionConfig,
	clientConfig,
	{ output: { path: modulePath.resolve(__dirname, `${publicDir}`) } }
);

module.exports = [productionClientConfig, productionServerConfig];