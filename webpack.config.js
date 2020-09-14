const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/dist/',
    filename: 'js/index.js'
  },
  module: {
    rules: [
        //react
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react']
          }
        }
      },
      //css
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:'css-loader'
        
      })
    },
    //sass
    {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:['css-loader','sass-loader']
        
      })
    },
    //pic
    {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'resource/[name].[ext]'
            },
          },
        ],
      },
     //font
     {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:'resource/[name].[ext]'
            },
          },
        ],
      }

]
    
  },
  
  
  plugins: [new HtmlWebpackPlugin({
      template:'./src/index.html'
  }),
  new ExtractTextPlugin('css/[name].css'),
  new webpack.optimize.CommonsChunkPlugin({
      name:'common',
      filename:'js/base.js'
  })
],
  devServer:{
      port:8086,
      historyApiFallback:{
          index:'/dist/index.html'
      }
  }
};