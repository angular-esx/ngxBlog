var _envt = {
  minify: false,
  distPath: './dist/',
  jsPath: 'js/',
  cssPath: 'css/',
  imgPath: 'resources/images/',
  iconFontPath: 'resources/icons/fonts/',
  articlePath: 'articles/'
};

_envt.getIndexDest = function() {
  return 'index.html';
};

_envt.getJsDest = function(path) {
  return this.getDest(this.jsPath, path);
};

_envt.getCssDest = function(path) {
  return this.getDest(this.cssPath, path);
};

_envt.getImgDest = function(path) {
  return this.getDest(this.imgPath, path);
};

_envt.getIconFontDest = function(path) {
  return this.getDest(this.iconFontPath, path);
};

_envt.getArticleDest = function(path) {
  return this.getDest(this.articlePath, path);
};

_envt.getDest = function() {
  var _path = '';
  for (var i = 0; i < arguments.length; i++) {
    _path += arguments[i] || '';
  }

  return this.distPath + _path;
};

module.exports = _envt;