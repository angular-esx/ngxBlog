import { baseTask } from './base-task';
import { envtFactory } from '../envts';
import { sassConfig } from '../sass/sass-config';

export class scssTask extends baseTask {
  run() {
    let _envt = envtFactory.getEnvt(this.args);
    let _paths = new sassConfig().includePaths;

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