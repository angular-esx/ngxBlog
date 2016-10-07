import { BaseTask } from './base-task';
import { Envt } from '../envts';

export class WatchTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);

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