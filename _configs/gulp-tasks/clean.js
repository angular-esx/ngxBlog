import { baseTask } from './base-task';
import { envtFactory } from '../envts';

export class cleanTask extends baseTask {
  run() {
    let _envt = envtFactory.getEnvt(this.args);

    this.del.sync([`${_envt.distPath}/**`]);
  }
}