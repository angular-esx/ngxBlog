(function() {
  var _GULP_TASKS = './_configs/gulp-tasks/';

  var _gulp = require('gulp');
  
  var _plugins = require("gulp-load-plugins")({
    pattern: [
      'yargs', 'del', 'gulp-jshint', 'jshint-stylish', 'gulp-sass',
      'gulp-rename', 'run-sequence', 'merge-stream', 'browser-sync', 'webpack',
      'autoprefixer', 'q', 'gulp-inject', 'unminified-webpack-plugin', 'gulp-concat'
    ],
    renameFn: function (name) {  
      return name
      .replace('gulp-', '')
      .replace(/-([a-z])/g, function (x, y) { return y.toUpperCase(); });
    }
  });

  _gulp.task('start', function () {
    _plugins.runSequence('clean', ['scss', 'resource', 'polyfill'], 'webpack', ['inject', 'lint', 'browser-sync']);
  });

  _gulp.task('build', function () {
    _plugins.runSequence('clean', ['scss', 'resource', 'polyfill'], 'webpack', ['inject', 'lint']);
  });

  _registerTask('clean');

  _registerTask('scss');

  _registerTask('polyfill');

  _registerTask('resource');

  _registerTask('lint');

  _registerTask('inject');

  _registerTask('browser-sync');

  _registerTask('watch');

  _registerTask('webpack');

  _gulp.task('reload', function(){
    _plugins.browserSync.reload();
  });

  function _registerTask(taskName, dependencies) {
    if(dependencies){
      _gulp.task(taskName, dependencies, _getTask(taskName));
    }
    else {
     _gulp.task(taskName, _getTask(taskName));
    }
  }

  function _getTask(taskName) {
    return require(_GULP_TASKS + taskName)({
      gulp: _gulp,
      plugins: _plugins,
      args: _plugins.yargs.argv
    });
  }
})();