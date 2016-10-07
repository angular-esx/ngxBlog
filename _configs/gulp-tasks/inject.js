import { BaseTask } from './base-task';
import { Envt } from '../envts';

export class InjectTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);
    let _notReadOption = { read: false };
    
    let _xBlogJs = this.gulp.src(_envt.getJsDest('xblog.js'), _notReadOption);
    
    let _xBlogCss = this.gulp.src(_envt.getCssDest('xblog.css'), _notReadOption);

    let _injectStream = this.gulp
    .src('./index.template.html')
    .pipe(this.rename('index.html'))
    .pipe(this.gulp.dest(_envt.distPath))
    .pipe(this.inject(this.mergeStream(_xBlogJs, _xBlogCss), { relative: true, name: 'xblog' }));

    if(this.args.mode === 'universal'){
      return _injectStream.
      pipe(this.gulp.dest(_envt.distPath));
    }
    else {
      let _polyfillStream = this.gulp
      .src([
        './node_modules/es6-shim/es6-sham.min.js', 
        './node_modules/es6-shim/es6-shim.min.js',
        './node_modules/zone.js/dist/zone.min.js',
        './node_modules/reflect-metadata/Reflect.js'
      ])
      .pipe(this.gulp.dest(_envt.getJsDest()));

      let _es6ShamJs = this.gulp.src(_envt.getJsDest('es6-sham.min.js'), _notReadOption);
      let _es6ShimJs = this.gulp.src(_envt.getJsDest('es6-shim.min.js'), _notReadOption);

      let _zoneJs = this.gulp.src(_envt.getJsDest('zone.min.js'), _notReadOption);
      let _reflectJs = this.gulp.src(_envt.getJsDest('Reflect.js'), _notReadOption);

      

      let _injectStream = this.gulp
      .src('./index.template.html')
      .pipe(this.rename('index.html'))
      .pipe(this.gulp.dest(_envt.distPath))
      .pipe(this.inject(this.mergeStream(_es6ShamJs, _es6ShimJs), { relative: true, name: 'ie11' }))    
      .pipe(this.inject(this.mergeStream(_zoneJs, _reflectJs), { relative: true, name: 'polyfills' }))
      .pipe(this.inject(this.mergeStream(_xBlogJs, _xBlogCss), { relative: true, name: 'xblog' }))
      .pipe(this.gulp.dest(_envt.distPath));

      return this.mergeStream(
        _polyfillStream,
        _injectStream
      );
    }
  }
}