import { BaseTask } from './baseTask';
import { Envt } from '../envts';

export class InjectTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);

    var _notReadOption = { read: false };
    
    var _polyfillStream = this.gulp
    .src([
      './node_modules/es6-shim/es6-sham.js', 
      './node_modules/es6-shim/es6-shim.js',
      './node_modules/zone.js/dist/zone.min.js',
      './node_modules/reflect-metadata/Reflect.js'
    ])
    .pipe(this.gulp.dest(_envt.getJsDest()));

    var _es6ShamJs = this.gulp.src(_envt.getJsDest('es6-sham.js'), _notReadOption);
    var _es6ShimJs = this.gulp.src(_envt.getJsDest('es6-shim.js'), _notReadOption);

    var _zoneJs = this.gulp.src(_envt.getJsDest('zone.min.js'), _notReadOption);
    var _reflectJs = this.gulp.src(_envt.getJsDest('Reflect.js'), _notReadOption);

    var _xBlogJs = this.gulp.src(_envt.getJsDest('xblog.js'), _notReadOption);
    var _mainJs = this.gulp.src(_envt.getJsDest('main.js'), _notReadOption);

    var _vendorCss = this.gulp.src(_envt.getCssDest('vendor.css'), _notReadOption);
    var _xBlogCss = this.gulp.src(_envt.getCssDest('xblog.css'), _notReadOption);

    var _injectStream = this.gulp
    .src('./index.template.html')
    .pipe(this.rename('index.html'))
    .pipe(this.gulp.dest(_envt.distPath))
    .pipe(this.inject(this.mergeStream(_es6ShamJs, _es6ShimJs), { relative: true, name: 'ie11' }))    
    .pipe(this.inject(this.mergeStream(_zoneJs, _reflectJs), { relative: true, name: 'polyfills' }))
    .pipe(this.inject(this.mergeStream(
      _xBlogJs, _mainJs,
      _vendorCss, _xBlogCss
    ), { relative: true, name: 'xblog' }))
    .pipe(this.gulp.dest(_envt.distPath));

    return this.mergeStream(
      _polyfillStream,
      _injectStream
    );
  }
}