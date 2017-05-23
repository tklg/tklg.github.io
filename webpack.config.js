var webpack = require('webpack');
module.exports = {
    resolve: {
        root: __dirname,
        modulesDirectories: ["./src/js/", "./node_modules/"]
    },
    /*entry: {
        app: ['webpack/hot/dev-server', './javascripts/entry.js'],
    },*/
    output: {
        //path: 'public/built/js/',
        filename: 'bundle.js'
    },
    /*devServer: {
        contentBase: './public',
        publicPath: 'http://localhost:8080/built/'
    },*/
    module: {
	 	loaders: [
		   { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
		   //{ test: /\.css$/, loader: 'style-loader!css-loader' },
		   //{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
	 	]
	},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify('development')
          }
        }),
        //new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
    ]
}