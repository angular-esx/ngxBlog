import { BaseTask } from './baseTask';
import { Envt } from '../envts';

export class BrowserSyncTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);

    this.browserSync({
      server: {
        baseDir: _envt.distPath,
        index: _envt.getIndexDest()
      },
      port: 8080,
      open: true,
      notify: false
    });
  }
}