function _task (params){
  var _baseTask = require('./baseTask')();

  _baseTask.run = function(){
    var _envt = require('../envts')(this.args);

    return this.gulp
    .src([
      './node_modules/es6-shim/es6-sham.js', 
      './node_modules/es6-shim/es6-shim.js',
      './node_modules/zone.js/dist/zone.min.js',
      './node_modules/reflect-metadata/Reflect.js'
    ])
    .pipe(this.gulp.dest(_envt.getJsDest()));
  };

  return _baseTask.getStream(params);
}

module.exports = _task;