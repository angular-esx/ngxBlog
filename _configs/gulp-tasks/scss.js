import { BaseTask } from './baseTask';
import { Envt } from '../envts';

export class ScssTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);
    
    let _vendorCssStream = this.gulp
    .src([
      './node_modules/ngx-bootstrap/cores/scss/normalize/normalize.scss',
      './node_modules/ngx-bootstrap/cores/scss/ngx-bootstrap.scss'
    ])
    .pipe(this.sass({ outputStyle: 'compressed' }).on('error', this.sass.logError))
    .pipe(this.concat('vendor.css'))
    .pipe(this.gulp.dest(_envt.getCssDest()));

    let _iconFontStream = this.gulp.src('./cores/resources/icons/fonts/fonts.scss')
    .pipe(this.sass({ outputStyle: 'compressed' }).on('error', this.sass.logError));

    let _xBlogCssStream = this.gulp.src('./cores/styles/xblog.scss');
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
  }
}