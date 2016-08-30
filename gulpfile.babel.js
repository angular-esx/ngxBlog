import gulpLoadPlugins from 'gulp-load-plugins';
import gulp from 'gulp';

import * as gulpTasks from './_configs/gulp-tasks';


let _plugins = gulpLoadPlugins({
  pattern: [
    'yargs', 'del', 'gulp-jshint', 'jshint-stylish', 'gulp-sass',
    'gulp-rename', 'run-sequence', 'merge-stream', 'browser-sync', 'webpack',
    'autoprefixer', 'q', 'gulp-inject', 'unminified-webpack-plugin', 'gulp-concat'
  ],
  renameFn: (name) => {  
    return name
    .replace('gulp-', '')
    .replace(/-([a-z])/g, (x, y) => y.toUpperCase());
  }
});

gulp.task('start', function () {
  _plugins.runSequence('clean', ['scss', 'resource', 'polyfill'], 'webpack', ['inject', 'lint', 'browser-sync']);
});

gulp.task('build', function () {
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

_registerTask('prerender');

_registerTask('webpack');

gulp.task('reload', function(){
  _plugins.browserSync.reload();
});

function _registerTask(taskName, dependencies) {
  if(dependencies){
    gulp.task(taskName, dependencies, _getTask(taskName));
  }
  else {
    gulp.task(taskName, _getTask(taskName));
  }
}

function _getTask(taskName) {
  var _taskName = taskName.toLowerCase().replace(/-([a-z])/g, (x, y) => { return y.toUpperCase(); });
  _taskName = `${_taskName.charAt(0).toUpperCase()}${_taskName.slice(1)}Task`;

  return new gulpTasks[_taskName]({
    gulp: gulp,
    plugins: _plugins
  }).getStream();
}