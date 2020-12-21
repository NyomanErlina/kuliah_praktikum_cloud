const path = require('path');

module.exports = {
    entry: './static/main.jsx',
    output: {
        path: path.join(__dirname, './static/build/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, "node_modules/")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                },
            }
        ]
    },
    devServer: {
        //historyApiFallback: true,
        hot: true,
    }
};