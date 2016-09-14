import * as path from 'path';

import { SassConfig } from '../sass/sass-config';

export class WebpackConfig {
  constructor(gulpPlugins) {
    this.context = path.resolve(__dirname, '../..');
    this.plugins = [];
    this.sassLoader = new SassConfig();
    this.postcss = [
      gulpPlugins.autoprefixer,
    ];
    this.module = {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'angular2-template-loader'
        },
        { test: /\.html$/, loader: 'html-loader' },
        { test: /\.json$/, loader: 'json-loader' },
        {
          test: /\.(scss|sass)$/,
          loader: [
            './_configs/webpack/loaders/clean-code-loader',
            '!sass-loader',
            '!postcss-loader'
          ].join('')
        }
      ]
    };
  }
}