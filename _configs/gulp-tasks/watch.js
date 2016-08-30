import { BaseTask } from './baseTask';

export class WatchTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);

    this.gulp.watch([
      './cores/**/*.js',
      './pages/**/*.js'
    ], 
    () => this.runSequence('lint', 'webpack', 'reload'));

    this.gulp.watch([
      './cores/**/*.html',
      './pages/**/*.html'
    ],
    () => this.runSequence('webpack', 'reload'));

    this.gulp.watch([
      './cores/**/*.scss',
      './pages/**/*.scss'
    ], 
    () => this.runSequence('scss', 'webpack', 'reload'));
  }
}