// const path = require('path');
// const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const { mode = 'development' } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
    ];
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: 'ReactApp',
        template: 'public/index.html',
      }),
    ];

    if (isProd) {
      plugins.push(
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
          filename: 'main-[hash:8].css',
        })
      );
    }

    return plugins;
  };

  return {
    mode: isProd ? 'production' : isDev && 'development',
    output: {
      filename: isProd ? 'main-[hash:8].js' : undefined,
    },
    resolve: { extensions: ['.js', '.ts', '.tsx'] },

    devServer: {
      open: true, // автоматически открывает браузер
    },

    devtool: isDev ? 'eval-cheap-source-map' : undefined,

    plugins: getPlugins(),

    module: {
      rules: [
        // Loading JS
        {
          test: /\.(js|ts|tsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },

        // Loading SASS
        {
          test: /\.(s[ca]ss)$/,
          use: [
            ...getStyleLoaders(),
            {
              loader: 'sass-loader',
              options: {
                // To enable CSS source maps, you'll need to pass the sourceMap option to the sass-loader and the css-loader
                sourceMap: true,
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                // Provide path to the file with resources
                resources: './src/assets/styles/constants.scss',
              },
            },
          ],
        },

        // Loading CSS
        {
          test: /\.css$/,
          use: getStyleLoaders(),
        },

        // Loading Images
        {
          test: /\.(png|jpg|jpeg|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/images',
                name: '[name]-[sha1:hash:7].[ext]',
              },
            },
          ],
        },

        // Loading Fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/fonts',
                name: '[name].[ext]',
              },
            },
          ],
        },
      ],
    },
  };
};
