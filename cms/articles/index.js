import { Class } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { ngxGridModule } from 'ngx-framework/modules';

import {
  xblogCodePanelModule,
  xblogHighlightModule,
  xblogSectionModule,
  xblogPostModule,
  xblogTableModule,
  xblogTableContentModule,
  xblogTableContentService
} from 'xblog-cores/modules';

import { article1477889733 } from './1477889733';

var _ARTICLES = [
  article1477889733
];


export var ARTICLE_STORE = _init();

var _ARTICLE_COMPONENTS = ARTICLE_STORE.LIST.map(function(article){
  return article.content;
});


export var cmsArticlesModuleMetadata = Class({
  constructor: function cmsArticlesModuleMetadata(){
    Object.assign(this, {
      imports: [ 
        BrowserModule,

        ngxGridModule,

        xblogCodePanelModule,
        xblogHighlightModule,
        xblogTableModule,
        xblogTableContentModule,
        xblogSectionModule,
        xblogPostModule
      ],
      declarations: _ARTICLE_COMPONENTS,
      providers: [ 
        xblogTableContentService
      ],
      entryComponents: _ARTICLE_COMPONENTS,
      exports: _ARTICLE_COMPONENTS
    });
  }
});


function _init() {
  let _list = [];
  let _map = {};

  _ARTICLES.forEach((article, index) => {
    if(_validate(article, index)){ 
      if(!_map[article.id]){
        _map[article.id] = article;
        _list.push(article);
      }
    }
  });

  _list.sort((article1, article2) => article2.id - article1.id);

  return { LIST: _list, MAP: _map };
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