import { BaseTask } from './baseTask';
import { Envt } from '../envts';
import { WebpackConfig } from '../webpack/webpack-config';

export let WebpackTask = (() => {
  let _webpackConfig = new WeakMap();

  class WebpackTask extends BaseTask {
    constructor(params) {
      super(params);
      _webpackConfig.set(this, new WebpackConfig(params.plugins));
    }

    run() {
      let _envt = new Envt(this.args);
      let _deferred = this.q.defer();
      let _baseConfig = _webpackConfig.get(this);

      let _getEntry = (name) => _envt
      .getJsDest(name)
      .replace('./', '')
      .replace('.js', '');
      
      _baseConfig.entry = {};
      _baseConfig.entry[_getEntry('xblog')] = ['./app/main.js'];

      _baseConfig.output = {
        filename: '[name].js'
      };

      _baseConfig.plugins.push(
        new this.webpack.optimize.DedupePlugin(),
        new this.webpack.optimize.CommonsChunkPlugin({
          name: [
            _getEntry('xblog')
          ],
        })
      );

      if(_envt.minify){
        _baseConfig.plugins.push(
          new this.webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false,
              keep_fnames: true
            },
            mangle: {
              keep_fnames: true
            }
          }),
          new this.unminifiedWebpackPlugin()
        );
      }

      this.webpack(_baseConfig, (ex, stats) => {
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
    }
  }

  return WebpackTask;
})();