const path = require('path');
const autoprefixer = require('autoprefixer');
module.exports = {
    devtool : 'cheap-module-eval-source-map',
    entry : './src/index.js',
    output: {
        path :path.resolve(__dirname, 'dist'),
        filename : 'bundle.js',
        publicPatch : ''
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader',
                        options : {
                            importLoaders : 1,
                            modules : true,
                            localIdentName: '[name]_[local]_[hash:base64:5]'
                        }
                    },
                    {
                        loader : 'postcss-loader',
                        options : {
                            ident : postcss,
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    },
                ],
                exclude: /node_modules/
            }
        ]
    }


}