function _task (params){
  var _baseTask = require('./baseTask')();

  _baseTask.run = function(){
    var _envt = require('../envts')(this.args);

    this.browserSync({
      server: {
        baseDir: _envt.distPath,
        index: _envt.getIndexDest()
      },
      port: 8080,
      open: true,
      notify: false
    });
  };

  return _baseTask.getStream(params);
}

module.exports = _task;