function _task (params){
  var _baseTask = require('./baseTask')();

  _baseTask.run = function(){
    return this.gulp
    .src([
      './cores/**/*.js',
      './pages/**/*.js',
      './_configs/envts/*.js',
      './_configs/gulp-tasks/*.js',
      './gulpfile.js'
    ])
    .pipe(this.jshint('./_configs/jshint/.jshintrc'))
    .pipe(this.jshint.reporter(this.jshintStylish));
  };

  return _baseTask.getStream(params);
}

module.exports = _task;
