import { BaseTask } from './base-task';
import { Envt } from '../envts';
import { SassConfig } from '../sass/sass-config';

export class ScssTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);
    let _paths = new SassConfig().includePaths;

    let _xBlogCssStream = this.gulp.src('./cores/styles/xblog.scss');
    if(_envt.minify){
      _xBlogCssStream = _xBlogCssStream
      .pipe(this.sass({ outputStyle: 'compressed', includePaths: _paths }).on('error', this.sass.logError));
    }
    else {
      _xBlogCssStream = _xBlogCssStream
      .pipe(this.sass({ outputStyle: 'expanded', includePaths: _paths }).on('error', this.sass.logError));
    }

    return _xBlogCssStream
    .pipe(this.gulp.dest(_envt.getCssDest()));
  }
}