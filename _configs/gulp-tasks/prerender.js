import 'angular2-universal/polyfills';
import { REQUEST_URL, NODE_LOCATION_PROVIDERS } from 'angular2-universal';
import { provide, enableProdMode } from '@angular/core';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { prerender } from './angular2-gulp-prerender';

import { BaseTask } from './baseTask';
import { Envt } from '../envts';

import { application } from '../../app/app';

export class PrerenderTask extends BaseTask {
  run() {
    // let _envt = new Envt(this.args);

    // enableProdMode();

    // return this.gulp.src('./index.template.html')
    // .pipe(prerender({
    //   directives: [ application ],
    //   providers: [
    //     //provide(APP_BASE_HREF, { useValue: '/' }),
    //     //provide(REQUEST_URL, { useValue: '/' }),
    //     //ROUTER_PROVIDERS,
    //     //NODE_LOCATION_PROVIDERS
    //   ],
    //   preboot: false
    // }))
    // .pipe(this.gulp.dest('dist'));
  }
}