import { BaseTask } from './baseTask';

export class LintTask extends BaseTask {
  run() {
    return this.gulp
    .src([
      './cores/**/*.js',
      './pages/**/*.js',
      './_configs/envts/*.js',
      './_configs/gulp-tasks/*.js',
      './gulpfile.js'
    ])
    .pipe(this.jshint('./_configs/jshint/.jshintrc'))
    .pipe(this.jshint.reporter(this.jshintStylish));
  }
}
