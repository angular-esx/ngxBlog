import * as path from 'path';

export class WebpackConfig {
  constructor(gulpPlugins) {
    this.context = path.resolve(__dirname, '../..');
    this.postcss = () => [gulpPlugins.autoprefixer];
    this.plugins = [];
    this.module = {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'angular2-template-loader'
        },
        { test: /\.html$/, loader: 'html-loader' },
        {
          test: /\.(scss|sass)$/,
          loader: [
            './_configs/webpack/loaders/clean-code-loader',
            '!postcss-loader',
            '!sass-loader'
          ].join('')
        }
      ]
    };
  }
}