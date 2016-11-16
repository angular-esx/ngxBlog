import webpack from 'webpack';
import unminifiedWebpackPlugin from 'unminified-webpack-plugin';

import { baseSpaWebpack } from './_spa-webpack';

export class productionSpaWebpack extends baseSpaWebpack {
  constructor() {
    super();

    this.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          keep_fnames: true
        },
        mangle: {
          keep_fnames: true
        }
      }),
      new unminifiedWebpackPlugin()
    );

    this.module.loaders.push({
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-es2015-template-literals']
      }
    });
  }
}