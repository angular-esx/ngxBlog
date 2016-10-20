import { baseTask } from './base-task';
import { envtFactory } from '../envts';

export class polyfillTask extends baseTask {
  run() {
    let _envt = envtFactory.getEnvt(this.args);

    return this.gulp
    .src([
      './node_modules/es6-shim/es6-sham.min.js', 
      './node_modules/es6-shim/es6-shim.min.js',
      './node_modules/zone.js/dist/zone.min.js',
      './node_modules/reflect-metadata/Reflect.js'
    ])
    .pipe(this.gulp.dest(_envt.getJsDest()));
  }
}