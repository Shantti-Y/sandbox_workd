const modulePath = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const entryDir = '../src';
const outDir = '../dist';

const clientDir = `../src/client`;
const serverDir = `../src/server`;

const commonConfig = {
	module: {
		rules: [
			{
				test: /\.(ts|tsx)/,
				exclude: /node_modules/,
				use: [{
					loader: "ts-loader",
					options: {
						appendTsSuffixTo: [/\.vue$/]
					}
				}]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				use: [
					'source-map-loader'
				]
			},
			{
				test: /\.esm\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@vue/cli-plugin-babel/preset', '@babel/preset-env'],
							plugins: ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-transform-typescript']
						}
					}
				]
			},
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{
						loader: "less-loader",
						options: { javascriptEnabled: true }
					}
				]
			},
			{
				test: /\.(png|jpg|gif|mp4)$/,
				use: {
					loader: 'file-loader',
					options: {
					}
				}
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto',
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	resolve: {
		extensions: ['.js','.ts', '.jpg', '.png', '.scss', '.vue'],
		alias: {
			'@client': modulePath.resolve(__dirname, `${clientDir}`),
			'@asset': modulePath.resolve(__dirname, `${clientDir}/asset`),
			'@component': modulePath.resolve(__dirname, `${clientDir}/component`),
			'@util': modulePath.resolve(__dirname, `${clientDir}/util`),
			'@layout': modulePath.resolve(__dirname, `${clientDir}/layout`),
			'@route': modulePath.resolve(__dirname, `${clientDir}/route`),
			'@store': modulePath.resolve(__dirname, `${clientDir}/store`),
			'@server': modulePath.resolve(__dirname, `${serverDir}/server`),
			'@controller': modulePath.resolve(__dirname, `${serverDir}/controller`),
			'@infra': modulePath.resolve(__dirname, `${serverDir}/infra`),
			'@lib': modulePath.resolve(__dirname, `${serverDir}/lib`)
		}
	},
	output: { publicPath: '/' }
};

module.exports = commonConfig;