const path = require('path')
const isDev = process.env.NODE_ENV == "development"
const ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const config = {
    mode:ENV,
    target: "web",
    entry:{
        index:path.join(__dirname,'../client/index.js')
    },
    output:{
        filename:"[name]-[hash:4].js",
        path:path.join(__dirname,"../dist")
    },
    module:{
        rules:[
            {
                test:/js$/,
                use:"babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            modifyVars: {
                                'primary-color': '#1DA57A',
                                'link-color': '#1DA57A',
                                'border-radius-base': '2px',
                            },
                            javascriptEnabled: true,
                        }
                    }
                    ]
                    }
                    ]},
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,"../client/template.html")
        })

    ],
    resolve:{
        extensions: [".js",".jsx",".css"]
    }
}

if(isDev){
    config.entry={
        index:[
            "react-hot-loader/patch",
            path.join(__dirname,'../client/index.js')
        ]
    }
    config.devServer={
        host:'0.0.0.0',
        port:'8888',
        contentBase:path.join(__dirname,"../dist"),
        hot:true,
        overlay:{
            errors:true
        },
        historyApiFallback:true
    }
}
config.plugins.push(new webpack.HotModuleReplacementPlugin())
module.exports = config