function _baseTask(){
  var _self = this;

  this.run = function(){
    throw 'run() is required for implement';
  };

  this.getStream = function(params){
    _assign(params);
    
    return function(){ return _self.run(); };
  };

  function _assign(params){
    for(var prop in params){
      if(prop === 'plugins'){
        for (var plugin in params.plugins) {
          _self[plugin] = params.plugins[plugin];
        }
      }
      else{
        _self[prop] = params[prop];
      }
    }
  }
}

module.exports = function(){ return new _baseTask(); };