const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const config = {
  srcFolder: 'src',
  outputFolder: 'dist'
};

module.exports = {
  entry: {
    main: `./${config.srcFolder}/js/index.tsx`
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, `../${config.outputFolder}`),
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: path => {
                return path.replace(/src/, '..');
              },
              outputPath: path => {
                return path.replace(/src/, '');
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/fonts',
              publicPath: '../fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(
      [
        `${config.outputFolder}/fonts`,
        `${config.outputFolder}/css`,
        `${config.outputFolder}/img`,
        `${config.outputFolder}/js`,
        `${config.outputFolder}/*.html`
      ],
      {
        root: path.resolve(__dirname, '../')
      }
    ),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new Dotenv()
  ]
};
