const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
let isDevelopment = NODE_ENV === 'development';

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
};

module.exports = () => {

    return {
        // context: paths.src,
        mode: isDevelopment ? 'development' : 'production',
        devtool: isDevelopment ? 'source-map' : false,
        entry: './src/js/app.ts',
        output: {
            path: paths.dist,
            filename: '[name].build.js'
        },
        resolve: {
            extensions: ['.ts', '.js', '.css',],
            alias: {}
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-object-rest-spread']
                        }
                    }
                },
                {
                    test: /\.ts$/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {loader: MiniCssExtractPlugin.loader},
                        {
                            loader: 'css-loader',
                            options: {sourceMap: isDevelopment}
                        },
                        {loader: 'resolve-url-loader'},
                        {loader: 'sass-loader', options: {sourceMap: isDevelopment}}, // force to `true` for resolve-url-loader
                    ]
                }
            ]
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 200,
                minChunks: 2,
                automaticNameDelimiter: '_',
                maxInitialRequests: 10
            }
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.css',
                chunkFilename: '[id].css'
            })
        ]
    }
}
