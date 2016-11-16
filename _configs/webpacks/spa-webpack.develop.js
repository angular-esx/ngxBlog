import { baseSpaWebpack } from './_spa-webpack';

export class developSpaWebpack extends baseSpaWebpack {
  constructor() {
    super();

    this.devtool = 'source-map';

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