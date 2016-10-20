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
  }
}