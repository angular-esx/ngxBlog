function _webpackConfig(gulpPlugins) {
  var _path = require('path');

  return {
    context: _path.resolve(__dirname, '../..'),
    plugins: [],
    module: {
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
    },
    postcss: function () {
      return [gulpPlugins.autoprefixer];
    }
  };
}

module.exports = _webpackConfig;