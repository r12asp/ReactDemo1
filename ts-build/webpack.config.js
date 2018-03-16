var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'src/');
var APP_DIR = path.resolve(__dirname, 'src/');
var config = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?/, include: APP_DIR, loader: 'babel-loader' },
            { test: /\.tsx?$/, exclude: /node_modules/, loaders: ['babel-loader', 'ts-loader'] },
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
module.exports = config;
//# sourceMappingURL=webpack.config.js.map