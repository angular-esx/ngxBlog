function _task (params){
  var _baseTask = require('./baseTask')();

  _baseTask.run = function(){
    var _envt = require('../envts')(this.args);

    this.del.sync([_envt.distPath + '**']);
  };

  return _baseTask.getStream(params);
}

module.exports = _task;