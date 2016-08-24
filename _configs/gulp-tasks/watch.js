function _task (params){
  var _baseTask = require('./baseTask')();

  _baseTask.run = function(){
    var _runSequence = this.runSequence;

    this.gulp.watch([
      './cores/**/*.js',
      './pages/**/*.js'
    ], function () {
      _runSequence('lint', 'webpack', 'reload');
    });

    this.gulp.watch([
      './cores/**/*.html',
      './pages/**/*.html'
    ], function () {
      _runSequence('webpack', 'reload');
    });

    this.gulp.watch([
      './cores/**/*.scss',
      './pages/**/*.scss'
    ], function () {
      _runSequence('scss', 'webpack', 'reload');
    });
  };

  return _baseTask.getStream(params);
}

module.exports = _task;