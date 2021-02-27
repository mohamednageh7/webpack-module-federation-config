const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
module.exports = {
  entry: './src/image.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath:'http://localhost:9002/'
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'image.html',
    port: 9002,
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
    // new TerserPlugin(), not needed in dev
    // new MiniCssExtractPlugin({
    //     filename:'style.css'
    // }), not needed in dev
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        // path.join(process.cwd(),'build/**/*')
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'image.html',
      title: 'Hello World',
      template: 'src/page-template.hbs',
      description: 'image',
      //   filename:'subfolder/custome_filename.html',
    }),
    new ModuleFederationPlugin({
      name:'ImageApp',
      filename:'remoteEntry.js',
      exposes:{
        './imagePage':'./src/component/image-page/image-page.js'
      },
      // remotes:{
      //   HelloWorldApp:'HelloWorldApp@http://localhost:9001/remoteEntry.js'
      // }
    })
  ],
};
