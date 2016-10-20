import { baseEnvt } from './_envt';

export class productionEnvt extends baseEnvt {
  constructor() {
    super();

    this.minify = true;
  }
}