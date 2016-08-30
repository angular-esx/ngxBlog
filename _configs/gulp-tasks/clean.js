import { BaseTask } from './baseTask';
import { Envt } from '../envts';

export class CleanTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);

     this.del.sync([`${_envt.distPath}/**`]);
  }
}