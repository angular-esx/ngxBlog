import { baseTask } from './base-task';
import { envtFactory } from '../envts';

export class browserSyncTask extends baseTask {
  run() {
    let _envt = envtFactory.getEnvt(this.args);

    this.browserSync({
      server: {
        baseDir: _envt.distPath,
        index: 'index.html'
      },
      port: 8080,
      open: true,
      notify: false
    });
  }
}