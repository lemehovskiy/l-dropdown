module.exports = {
    watch: true,
    entry: './src/l-dropdown.es6',
    output: {
        filename: 'build/l-dropdown.js',
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};