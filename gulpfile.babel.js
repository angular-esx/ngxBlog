import gulpLoadPlugins from 'gulp-load-plugins';
import gulp from 'gulp';

import * as gulpTasks from './_configs/gulp-tasks';
import { envtFactory } from './_configs/envts';

let _plugins = gulpLoadPlugins({
  pattern: [
    'yargs', 'del', 'gulp-jshint', 'jshint-stylish', 'gulp-sass',
    'gulp-rename', 'run-sequence', 'merge-stream', 'browser-sync',
    'webpack', 'gulp-inject', 'gulp-concat', 'gulp-inline-ng2-template', 
    'html-minifier', 'node-sass', 'gulp-file', 'gulp-htmlmin'
  ],
  renameFn: (name) => {  
    return name
    .replace('gulp-', '')
    .replace(/-([a-z])/g, (x, y) => y.toUpperCase());
  }
});

gulp.task('start', () => {
  if(_plugins.yargs.argv.action){
    _plugins.runSequence('clean', ['lint', 'scss', 'resource'], 'inject', 'prerender', 'root-index', 'browser-sync');
  }
  else {
    _plugins.runSequence('clean', ['lint', 'scss', 'resource', 'polyfill'], 'spa-bundle', ['inject', 'browser-sync']);
  }
});

gulp.task('build', () => {
  if(_plugins.yargs.argv.action){
     if(_plugins.yargs.argv.envt === 'production'){
       _plugins.runSequence('clean', ['lint', 'scss', 'resource'], 'inject', 'prerender', 'minify-html', 'root-index');
     }
     else{
       _plugins.runSequence('clean', ['lint', 'scss', 'resource'], 'inject', 'prerender', 'root-index');
     }
  }
  else { 
    _plugins.runSequence('clean', ['lint', 'scss', 'resource', 'polyfill'], 'spa-bundle', 'inject');
  }
});

gulp.task('preview-article', () => {
  _plugins.runSequence('clean', ['lint', 'scss', 'resource'], 'inject', 'prerender', 'root-index', 'browser-sync');
});

_registerTask('clean');

_registerTask('scss');

_registerTask('polyfill');

_registerTask('resource');

_registerTask('lint');

_registerTask('inject');

_registerTask('browser-sync');

_registerTask('watch');

_registerTask('spa-bundle');

_registerTask('prebuild');

_registerTask('prerender');

_registerTask('create-article');

gulp.task('reload', () => {
  _plugins.browserSync.reload();
});

gulp.task('root-index', () => {
  let _envt = envtFactory.getEnvt(_plugins.yargs.argv);
  
  let _arg;
  if(_plugins.yargs.argv.action.indexOf('detail-') > -1){
    _arg = _plugins.yargs.argv.action.split('-').pop();

    return gulp.src(_envt.getArticleDest(`*-${_arg}.html`))
    .pipe(_plugins.rename('index.html'))
    .pipe(gulp.dest(_envt.distPath));
  }
  else if(_plugins.yargs.argv.action.indexOf('paginate-') > -1){
    return gulp.src(_envt.getArticleDest('1/index.html'))
    .pipe(_plugins.rename(file => file.dirname = ''))
    .pipe(gulp.dest(_envt.distPath));
  }
});

gulp.task('minify-html', () => {
  let _envt = envtFactory.getEnvt(_plugins.yargs.argv);

  return gulp.src(_envt.getArticleDest('**/*.html'))
  .pipe(_plugins.htmlmin({
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    minifyURLs: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true
  }))
  .pipe(gulp.dest(_envt.getArticleDest()));
})

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
  _taskName = `${_taskName.charAt(0).toLowerCase()}${_taskName.slice(1)}Task`;

  return new gulpTasks[_taskName]({
    gulp: gulp,
    plugins: _plugins
  })
  .getStream();
}