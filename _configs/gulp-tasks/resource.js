import { BaseTask } from './base-task';
import { Envt } from '../envts';

export class ResourceTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);

    let _iconFontStream = this.gulp
    .src([
      './cores/resources/icons/fonts/font-awesome.otf',
      './cores/resources/icons/fonts/font-awesome.eot',
      './cores/resources/icons/fonts/font-awesome.svg',
      './cores/resources/icons/fonts/font-awesome.ttf',
      './cores/resources/icons/fonts/font-awesome.woff',
      './cores/resources/icons/fonts/font-awesome.woff2'
    ])
    .pipe(this.rename(file => file.dirname = ''))
    .pipe(this.gulp.dest(_envt.getIconFontDest()));

    let _imageStream = this.gulp
    .src([
      './pages/**/resources/images/*.jpg',
      './cms/articles/**/resources/images/*.jpg',
      './cms/articles/**/resources/images/*.png',
    ])
    .pipe(this.rename(file => file.dirname = ''))
    .pipe(this.gulp.dest(_envt.getImgDest()));

    let _cssStream = this.gulp
    .src([
      './node_modules/highlight.js/styles/dracula.css',
    ])
    .pipe(this.rename('highlight.css'))
    .pipe(this.gulp.dest(_envt.getCssDest()));

    return this.mergeStream(
      _iconFontStream,
      _imageStream,
      _cssStream
    );
  }
}