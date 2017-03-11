const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');

const packageJson = require('./package.json');
const vendorLibs = Object.keys(packageJson.dependencies);

const nconf = require('nconf');
nconf
	.env()
	.file('.env')
	.defaults({
		NODE_ENV: 'production',
		API_URL: '0.0.0.0:8081',
		DEVSERVER: !!process.argv[1].match(/dev-server/ig),
	});

const definitions = {
	NODE_ENV: nconf.get('NODE_ENV'),
	DEVSERVER: nconf.get('DEVSERVER'),
};

const commonsPluginOptions = {
	name: 'vendor',
	filename: 'vendor.bundle.js',
};

const faviconPluginOptions = {
	logo: './src/frontend/static/favicon.png',
	title: 'invoicer',
	icons: {
		// See https://github.com/jantimon/favicons-webpack-plugin for more icons
		favicons: true,
		android: false,
		appleIcon: false,
		appleStartup: false,
		firefox: true,
	},
};

const htmlPluginOptions = {
	filename: 'index.html',
	template: './src/frontend/static/index.ejs',
	inject: 'body',
	hash: nconf.get('DEVSERVER'),
};


/**
 *
 *	Actual configuration below
 *
 */

module.exports = {
	entry: {
		index: nconf.get('DEVSERVER') ? [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/dev-server',
			'./src/index.js',
		] : ['./src/index.js'],
		vendor: vendorLibs,
	},

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js',
		pathinfo: true,
		publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loaders: ['babel-loader'],
				include: [
					path.resolve(__dirname, 'src'),
				],
			},
			{
				test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$/,
				loader: 'file-loader?name=[name].[ext]',
			},
			{
				test: /\.css$|\.less$/,
				loader: 'style-loader!css-loader!less-loader?sourceMap',
			}
		]
	},

	resolve: {
		modules: [
			'node_modules',
			path.resolve(__dirname, 'src')
		],
		extensions: ['.js', '.json', '.css', '.less'],
		alias: {
			'data': path.join(__dirname, 'src/data'),
			'actions': path.join(__dirname, 'src/frontend/actions'),
			'components': path.join(__dirname, 'src/frontend/components'),
			'containers': path.join(__dirname, 'src/frontend/containers'),
			'screens': path.join(__dirname, 'src/frontend/screens'),
			'helpers': path.join(__dirname, 'src/frontend/helpers'),
			'forms': path.join(__dirname, 'src/frontend/forms'),
			'reducers': path.join(__dirname, 'src/frontend/reducers'),
			'stylesheets': path.join(__dirname, 'src/frontend/styles'),
		},
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin(commonsPluginOptions),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin(definitions),
		new FaviconsWebpackPlugin(faviconPluginOptions),
		new HtmlWebpackPlugin(htmlPluginOptions),
		new ExtractTextPlugin('app.css')
	],

	performance: {
		hints: 'warning',
		maxAssetSize: 200000,
		maxEntrypointSize: 1000000,
	},

	devtool: nconf.get('NODE_ENV') === 'production' ? false : '#source-maps',
	stats: 'minimal',

	devServer: {
		contentBase: './src',
		host: '0.0.0.0',
		port: 8080,
		hot: true,
		inline: false,
		stats: 'minimal',
		historyApiFallback: {
				index: '/',
				rewrites: [
					{ from: /./, to: '/' },
				],
			},
		proxy: {
			'/api/**': {
				changeOrigin: true,
				target: nconf.get('API_URL'),
			},
		},
	},
}