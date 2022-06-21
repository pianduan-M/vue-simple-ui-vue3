const path = require('path')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname,'./main.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js'
    // assetModuleFilename: "img/[name]_[hash:6][ext]"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader',"sass-loader"]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,  './index.html'),
      title: 'test'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    static: "/dist",
    port: 8080,
    hot: true,

    open: true,
  },
}
