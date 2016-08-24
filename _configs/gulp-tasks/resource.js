function _task (params){
  var _baseTask = require('./baseTask')();

  _baseTask.run = function(){
    var _envt = require('../envts')(this.args);

    var _iconFontStream = this.gulp
    .src([
      './cores/resources/icons/fonts/fontAwesome.otf',
      './cores/resources/icons/fonts/fontAwesome-webfont.eot',
      './cores/resources/icons/fonts/fontAwesome-webfont.svg',
      './cores/resources/icons/fonts/fontAwesome-webfont.ttf',
      './cores/resources/icons/fonts/fontAwesome-webfont.woff',
      './cores/resources/icons/fonts/fontAwesome-webfont.woff2'
    ])
    .pipe(this.rename(function(file){ 
      file.dirname = '';
    }))
    .pipe(this.gulp.dest(_envt.getIconFontDest()));

    var _imageStream = this.gulp
    .src('./pages/**/resources/images/*.jpg')
    .pipe(this.rename(function(file){ 
      file.dirname = '';
    }))
    .pipe(this.gulp.dest(_envt.getImgDest()));

    return this.mergeStream(
      _iconFontStream,
      _imageStream
    );
  };

  return _baseTask.getStream(params);
}

module.exports = _task;