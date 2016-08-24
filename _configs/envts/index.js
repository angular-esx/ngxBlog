module.exports = function (args) {
  return new _envt({
    envt: args.envt || 'develop'
  });
};

function _envt(options) {
  _init(this, options);

  function _init(context, options) {
    var _envt = require('./envt.' + options.envt);

    for (var prop in _envt) {
      if(_envt[prop] && options[prop]){
        context[prop] = options[prop];
      }
      else if(_envt[prop] && !options[prop]){
        context[prop] = _envt[prop];
      }
    }
  }
}