import { BaseTask } from './baseTask';
import { Envt } from '../envts';

export class ScssTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);

    let _xBlogCssStream = this.gulp.src('./cores/styles/xblog.scss');
    if(_envt.minify){
      _xBlogCssStream = _xBlogCssStream
      .pipe(this.sass({ outputStyle: 'compressed' }).on('error', this.sass.logError));
    }
    else {
      _xBlogCssStream = _xBlogCssStream
      .pipe(this.sass({ outputStyle: 'expanded' }).on('error', this.sass.logError));
    }

    return _xBlogCssStream
    .pipe(this.gulp.dest(_envt.getCssDest()));
  }
}