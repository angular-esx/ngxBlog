import { BaseTask } from './baseTask';
import { Envt } from '../envts';

export class ResourceTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);

    let _iconFontStream = this.gulp
    .src([
      './cores/resources/icons/fonts/fontAwesome.otf',
      './cores/resources/icons/fonts/fontAwesome-webfont.eot',
      './cores/resources/icons/fonts/fontAwesome-webfont.svg',
      './cores/resources/icons/fonts/fontAwesome-webfont.ttf',
      './cores/resources/icons/fonts/fontAwesome-webfont.woff',
      './cores/resources/icons/fonts/fontAwesome-webfont.woff2'
    ])
    .pipe(this.rename(file => file.dirname = ''))
    .pipe(this.gulp.dest(_envt.getIconFontDest()));

    let _imageStream = this.gulp
    .src('./pages/**/resources/images/*.jpg')
    .pipe(this.rename(file => file.dirname = ''))
    .pipe(this.gulp.dest(_envt.getImgDest()));

    return this.mergeStream(
      _iconFontStream,
      _imageStream
    );
  }
}