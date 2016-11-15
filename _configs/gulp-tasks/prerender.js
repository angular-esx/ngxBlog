import 'angular2-universal-polyfills';
import { Class, NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { baseTask } from './base-task';
import { envtFactory } from '../envts';
import { prerenderWebpackFactory } from '../webpacks';

import { xblogReducer } from 'xblog-store';

import { ARTICLE_STORE } from '../../cms/articles';

import { HOMEPAGE_PAGE_SIZE as PAGE_SIZE } from 'xblog-cores/constants';

import { resourceUtils } from 'xblog-cores/utils';

import { 
  xblogHomePageModule,
  xblogArticlePageModule
} from '../../pages';

import { router } from '../../app/router';
import { xblogApp } from '../../app/app';


export class prerenderTask extends baseTask {
  run() {
    let _envt = envtFactory.getEnvt(this.args);
    
    if (this.args.action.indexOf('paginate-') > -1){ 
      let _totalItems = this.args.action.split('-').pop();
      if(ARTICLE_STORE.LIST.length <= _totalItems) { _totalItems = ARTICLE_STORE.LIST.length; }

      let _totalPages = _totalItems % PAGE_SIZE === 0 ? _totalItems / PAGE_SIZE : Math.floor(_totalItems / PAGE_SIZE) + 1;

      let _prerenderPromises = [];
      for (let _pageNum = 1; _pageNum <= _totalPages; _pageNum++){
        _prerenderPromises.push(_getHomePagePrerenderPromise(this, _envt, _pageNum));
      }

      for(let _index = 0; _index < _totalItems; _index++){
        _prerenderPromises.push(_getArticlePagePrerenderPromise(this, _envt, ARTICLE_STORE.LIST[_index]));
      }

      return Promise.all(_prerenderPromises);
    }
    else if (this.args.action.indexOf('detail-') > -1){ 
     let _article = ARTICLE_STORE.MAP[this.args.action.split('-').pop()];  

     return _getArticlePagePrerenderPromise(this, _envt, _article);
    }
    else{
      throw '--action argument is required';
    }
  }
}


/* For homePage prerender */
function _getHomePagePrerenderPromise(context, envt, pageNum) {
  return _getPrerenderPromise(context, {
    ngModule: _getModule(_getHomePageRouter(pageNum, router)),
    documentPath: envt.getArticleDest(`${pageNum}/index.html`)
  });
}

function _getHomePageRouter(pageNum, router){
  let _router = router.filter(navigation => navigation.path !== '');
  _router.push({
    path: '',
    redirectTo: resourceUtils.getHomeRouteLink(pageNum),
    pathMatch: 'full'
  });

  return _router;
}


/* For articlePage prerender */
function _getArticlePagePrerenderPromise(context, envt, article) {
  return _getPrerenderPromise(context, {
    ngModule: _getModule(_getArticlePageRouter(article, router)),
    documentPath: envt.getArticleDest(`${article.routeLink.split('/').pop()}`)
  });
}

function _getArticlePageRouter(article, router){
  let _router = router.filter(navigation => navigation.path !== '');
  _router.push({
    path: '',
    redirectTo: article.routeLink,
    pathMatch: 'full'
  });

  return _router;
}

/* Utilities for prerender */
function _getPrerenderPromise(context, options){
  let _webpack = prerenderWebpackFactory
  .getWebpack(context.args)
  .setupPrerender(options);

  return new Promise((resolve, reject) => {
    context.webpack(_webpack, function (ex, stats) {
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

function _getModule(router){
  return NgModule({
    imports: [ 
      RouterModule.forRoot(router),
      StoreModule.provideStore(xblogReducer),
      xblogHomePageModule,
      xblogArticlePageModule,
      UniversalModule
    ],
    declarations: [ xblogApp ],
    bootstrap: [ xblogApp ]
  })
  .Class({
    constructor: function(){}
  });
}

