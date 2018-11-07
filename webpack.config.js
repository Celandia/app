var webpack = require("webpack");
module.exports = {
    entry : __dirname + "/src/js/main.js",
    output :{
        path : __dirname + "/dist/",
        filename : "app.js"
    },
    devtool : "source-map",
    devServer : {
        contentBase : __dirname + "/dist/",
        port : 3000,
        inline : true
    },
    module : {
        loaders : [
            {test : /\.js$/,exclude:/node_modules/,loader:"babel-loader?presets[]=es2015&presets[]=react"},
            {test : /\.css$/,loader:"style-loader!css-loader"},
            {test : /\.less$/,loader:"style-loader!css-loader!less-loader"},
            {test : /\.(png|jpg|gif|ico)$/,loader:"url-loader?limit=8192&name=images/[name][hash:8].[ext]"},
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            React : "react"
        })
    ]
}