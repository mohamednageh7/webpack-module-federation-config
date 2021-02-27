const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry:'./src/image.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath:'http://localhost:9002/'
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize:9000,
      automaticNameDelimiter:'_'
    },
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: ['file-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
      filename: 'image.html',
      title: 'Image',
      template: 'src/page-template.hbs',
      description: 'Image',
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
