import webpack from 'webpack';

import { baseWebpack } from './_webpack';

export class baseSpaWebpack extends baseWebpack {
  constructor() {
    super();

    this.entry = {
      'dist/blog/js/xblog': ['./app/main.js']
    };

    this.output = {
      filename: '[name].js'
    };

    this.plugins.push(new webpack.optimize.CommonsChunkPlugin({
      name: [
        'dist/blog/js/xblog'
      ],
    }));
  }
}