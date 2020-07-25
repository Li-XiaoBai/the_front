// 引入node模块
const path =require ('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口
    entry:{
       main: './src/index.js'
    },
    // 出口
    output:{
        // path.reslove是绝对路径（——dirname,'生成的文件夹名称'）
        path: path.resolve(__dirname,'dist'),
        // 调用的js文件
        filename:'index.js'
    },
    // 插件集合
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                // 去除”“用于减轻数据量
                removeAttributeQuotes:true
            },
            // hash将src路径变成hash码用于缓存  并隐藏绝对路径
            hash:true,
            // 如果没有hash：true则显示的是本地的绝对路径
            template:"./src/index.html"
        })
    ],
    //项目的服务与热更新
    devServer:{
        // 设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        
        host:'localhost'
    } 
}