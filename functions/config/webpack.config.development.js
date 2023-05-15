const modulePath = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
const clientConfig = require('./webpack.config.client.js');

const outDir = '../public';

const developmentConfig = merge(commonConfig, clientConfig, {
	mode: "development",
	devtool: "source-map",
	devServer: {
		inline: true,
		contentBase: modulePath.resolve(__dirname, `${outDir}`),
		hot: true,
		historyApiFallback: true
	},
	output: {
		filename: '[name].js',
		path: modulePath.join(__dirname, `${outDir}`),
		libraryTarget: 'this',
		publicPath: '/'
	},
});

module.exports = developmentConfig;