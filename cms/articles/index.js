import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {
  xblogCodePanelModule,
  xblogHighlightModule,
  xblogTableContentModule,
  xblogTableContentService
} from 'xblog-cores/modules';

var _ARTICLES = [];


export var ARTICLE_STORE = _init();

var _ARTICLE_COMPONENTS = ARTICLE_STORE.LIST.map(function(article){
  return article.content;
});

export var cmsArticlesModule = NgModule({
  imports: [ 
    BrowserModule,
    xblogCodePanelModule,
    xblogHighlightModule,
    xblogTableContentModule
  ],
  declarations: _ARTICLE_COMPONENTS,
  providers: [ 
    xblogTableContentService
  ],
  entryComponents: _ARTICLE_COMPONENTS,
  exports: _ARTICLE_COMPONENTS
})
.Class({
  constructor: function(){}
});

function _init() {
  let _list = [];
  let _models = {};

  _ARTICLES.forEach((article, index) => {
    if(_validate(article, index)){ 
      if(!_models[article.id]){
        _models[article.id] = article;
        _list.push(article);
      }
    }
  });

  _list.sort((article1, article2) => article2.id - article1.id);

  return Object.assign({ LIST: _list }, _models);
}

function _validate(article, index) {
  let _message = `Article ${article.id} is missing`;

  try {
    if(!article.id){ throw `Article is at index ${index} missing id`; }
    if(!article.title){ throw `${_message} title`; }
    if(!article.postedDate){ throw `${_message} postedDate`; }
    if(!article.author){ throw `${_message} author`; }
    if(!article.cover){ throw `${_message} cover`; }
    if(!article.routeLink){ throw `${_message} routeLink`; }
    if(!article.relatedArticles){ throw `${_message} relatedArticles`; }
    if(!article.tags){ throw `${_message} tags`; }
    if(!article.description){ throw `${_message} description`; }
    if(!article.content){ throw `${_message} content`; }
  }
  catch(ex){ 
    console.log(ex);
    return false; 
  }

  return true;
}