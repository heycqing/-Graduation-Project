
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    webpack: (config, options) => {


        const { dev, isServer } = options

        config.module.rules.push(
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        }]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        'sass-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        )

        config.plugins.push(
            new ExtractTextPlugin({
                filename: (getPath) => {
                    return getPath('[name].css').replace('.js', '');
                }
            })
        )

        return config
    }
}