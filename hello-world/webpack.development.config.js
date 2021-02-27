const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container


module.exports = {
  entry: './src/helloWorld.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath:'http://localhost:9001/'
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'hello-world.html',
    port: 9001,
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: ['file-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['transform-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        // path.join(process.cwd(),'build/**/*')
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      title: 'Hello World',
      template: 'src/page-template.hbs',
      description: 'Hello world',
      //   filename:'subfolder/custome_filename.html',
    }),
    new ModuleFederationPlugin({
      name:'HelloWorldApp',
      filename:'remoteEntry.js',
      exposes:{
        './HelloWorldButton':'./src/component/hello-world-button/hello-world-button.js',
        './HelloWorldPage':'./src/component/hello-world-page/hello-world-page.js'
      }
    })
  ],
};
