import { baseTask } from './base-task';
import { envtFactory } from '../envts';

export class watchTask extends baseTask {
  run() {
    let _envt = envtFactory.getEnvt(this.args);

    this.gulp.watch([
      './cores/**/*.js',
      './pages/**/*.js',
      './cores/**/*.scss',
      './pages/**/*.scss',
      './cores/**/*.html',
      './pages/**/*.html'
    ], 
    () => this.runSequence('lint', 'scss', 'webpack', 'reload'));
  }
}