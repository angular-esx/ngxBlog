import { baseTask } from './base-task';
import { spaWebpackFactory } from '../webpacks';

export class spaBundleTask extends baseTask {
  run() {
    let _webpack = spaWebpackFactory.getWebpack(this.args);

    return new Promise((resolve, reject) => {
      this.webpack(_webpack, (ex, stats) => {
        if (stats) {
          console.log(stats.toString({
            colors: true,
            children: false,
            chunks: false,
            modules: false
          }));
        }

        if (ex) {
          console.log(ex);
          reject();
        }
        else{
          resolve();
        }
      });
    });
  }
}