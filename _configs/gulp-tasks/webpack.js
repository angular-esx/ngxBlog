function _task(params) {
  var _webpackConfig = require('../webpack/webpack-common')(params.plugins);
  var _baseTask = require('./baseTask')();

  _baseTask.run = function () {
    var _envt = require('../envts')(this.args);
    var _webpack = this.webpack;
    var _unminifiedWebpackPlugin = this.unminifiedWebpackPlugin;
    var _deferred = this.q.defer();

    var _getEntry = function (name) {
      return _envt
        .getJsDest(name)
        .replace('./', '')
        .replace('.js', '');
    };

    _webpackConfig.entry = {};
    _webpackConfig.entry[_getEntry('xblog')] = ['./app/router.js'];
    _webpackConfig.entry[_getEntry('main')] = ['./app/main.js'];

    _webpackConfig.output = {
      filename: '[name].js'
    };

    _webpackConfig.plugins.push(
      new _webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          keep_fnames: true
        },
        mangle: {
          keep_fnames: true
        }
      }),
      new _unminifiedWebpackPlugin(),
      new _webpack.optimize.DedupePlugin(),
      new _webpack.optimize.CommonsChunkPlugin({
        name: [
          _getEntry('main'),
          _getEntry('xblog')
        ],
      })
    );

    _webpack(_webpackConfig, function (ex, stats) {
      if (ex) {
        console.log(ex);
        _deferred.reject();
      }

      if (stats) {
        console.log(stats.toString({
          colors: true,
          children: false,
          chunks: false,
          modules: false
        }));
      }

      _deferred.resolve();
    });

    return _deferred.promise;
  };

  return _baseTask.getStream(params);
}

module.exports = _task;