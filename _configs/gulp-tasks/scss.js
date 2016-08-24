function _task (params){
  var _baseTask = require('./baseTask')();
  
  _baseTask.run = function(){
    var _envt = require('../envts')(this.args);

    var _vendorCssStream = this.gulp
    .src([
      './node_modules/ngx-bootstrap/cores/scss/normalize/normalize.scss',
      './node_modules/ngx-bootstrap/cores/scss/ngx-bootstrap.scss'
    ])
    .pipe(this.sass({ outputStyle: 'compressed' }).on('error', this.sass.logError))
    .pipe(this.concat('vendor.css'))
    .pipe(this.gulp.dest(_envt.getCssDest()));

    var _iconFontStream = this.gulp.src('./cores/resources/icons/fonts/fonts.scss')
    .pipe(this.sass({ outputStyle: 'compressed' }).on('error', this.sass.logError));

    var _xBlogCssStream = this.gulp.src('./cores/styles/xblog.scss');
    if(_envt.minify){
      _xBlogCssStream = _xBlogCssStream
      .pipe(this.sass({ outputStyle: 'compressed' }).on('error', this.sass.logError));
    }
    else {
      _xBlogCssStream = _xBlogCssStream
      .pipe(this.sass({ outputStyle: 'expanded' }).on('error', this.sass.logError));
    }

    _xBlogCssStream = this.mergeStream(_iconFontStream, _xBlogCssStream)
    .pipe(this.concat('xblog.css'))
    .pipe(this.gulp.dest(_envt.getCssDest()));

    return this.mergeStream(
      _vendorCssStream,
      _xBlogCssStream
    );
  };

  return _baseTask.getStream(params);
}

module.exports = _task;