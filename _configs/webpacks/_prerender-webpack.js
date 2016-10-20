import fs from 'fs';

import { baseWebpack } from './_webpack';
import { UniversalPrerender } from './angular2-webpack-prerender';

export class basePrerenderWebpack extends baseWebpack {
  constructor(){
    super();

    this.entry = {};
    this.output = {};
  }

  setupPrerender(options) {
    this.plugins.push(
      new UniversalPrerender(Object.assign({
        document: fs.readFileSync('./dist/index.html', 'utf8'),
        time: true,
        originUrl: '/',
        baseUrl: '/',
        requestUrl: '/',
        preboot: false,
      }, options))
    );

    return this;
  }
}