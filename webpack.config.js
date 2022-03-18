// const webpack=require('webpack')

process.env.NODE_ENV = "development"

module.exports = {
    entry: './src/index.ts',
    output:{
        filename:"[name].js",
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}