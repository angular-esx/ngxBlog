import 'angular2-universal/polyfills';
import * as ngCore from '@angular/core';
import { REQUEST_URL, ORIGIN_URL, NODE_LOCATION_PROVIDERS } from 'angular2-universal';
import { enableProdMode } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { provideRouter } from '@angular/router';
import { prerender } from './angular2-gulp-prerender';

import { BaseTask } from './base-task';
import { Envt } from '../envts';

import { ARTICLE_STORE } from '../../_database';

import { cmsArticleService } from '../../cms/cores/services';

import { application } from '../../app/app';
import { homeService, articleService } from '../../pages';
import { router } from '../../app/router';

export class PrerenderTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);
    let _src = `${_envt.distPath}/index.html`;
    let _article;

    enableProdMode();

    if(this.args.action === 'paginate') {
       return _getPrerenderStream(this, _envt, router, [ homeService ], _src, _envt.getBlogDest('index.html'));
    }
    else if (this.args.action.indexOf('detail-') > -1) {
      _article = ARTICLE_STORE[this.args.action.split('-').pop()];

      return _getPrerenderStream(
        this, 
        _envt,
        _getRouter(_article, router), 
        [ 
          articleService,
          { provide: cmsArticleService, useClass: _getCmsArticleService() }
        ], 
        _src, 
        _envt.getArticleDest(`${_article.routeLink.split('/').pop()}`)
      );
    }

    throw `This action "${this.args.action}" is not supported`;
  }
}

function _getRouter(article, router){
  let _router = router.filter(navigation => navigation.path !== '');
  _router.push({
    path: '',
    redirectTo: article.routeLink,
    pathMatch: 'full'
  });

  return _router;
}

function _getCmsArticleService(){
  return ngCore.Class(new _cmsArticleService());
}

function _getPrerenderStream(context, envt, router, providers, src, dest){
  let _dest = dest.split('/');
  let _output = _dest.pop();
  _dest = _dest.join('/');

  let _stream = context.gulp.src(src)
  .pipe(prerender({
    directives: [ application ],
    platformProviders: [
      { provide: ORIGIN_URL, useValue: '/'},
      { provide: APP_BASE_HREF, useValue: '/'},
    ],
    providers: [
      provideRouter(router),
      { provide: REQUEST_URL, useValue: '/' },
      NODE_LOCATION_PROVIDERS
    ].concat(providers),
    preboot: false
  }));

  if(envt.minify){
    _stream = _stream
    .pipe(context.htmlmin({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      minifyURLs: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true
    }));
  }

  return _stream
  .pipe(context.rename(_output))
  .pipe(context.gulp.dest(_dest));
}

function _cmsArticleService(){
  this.constructor = function cmsArticleService(){};

  this.getCodeBlock = function(id, fileName){
    return require('fs')
    .readFileSync(`./cms/articles/${id}/code-blocks/${fileName}`, 'utf8')
    .toString();
  };
}