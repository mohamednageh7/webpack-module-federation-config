const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/dashboard.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9000/',
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 9000,
      automaticNameDelimiter: '_',
    },
  },
  module: {
    rules: [
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
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    // new TerserPlugin(), exsit by default
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        // path.join(process.cwd(), 'build/**/*'),
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      title: 'Dashboard',

      //   filename:'subfolder/custome_filename.html',
    }),
    new ModuleFederationPlugin({
      name: 'App',
      remotes: {
        HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js',
        ImageApp: 'ImageApp@http://localhost:9002/remoteEntry.js',
      },
    }),
  ],
};
