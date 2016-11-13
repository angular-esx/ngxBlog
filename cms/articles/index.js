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

import { article1477045370 } from './1477045370';
import { article1476738850 } from './1476738850';
import { article1476538850 } from './1476538850';
import { article1475436850 } from './1475436850';
import { article1475426750 } from './1475426750';
import { article1474905680 } from './1474905680';
import { article1474380939 } from './1474380939';
import { article1473861890 } from './1473861890';
import { article1478245913 } from './1478245913';
import { article1476250476 } from './1476250476';

var _ARTICLES = [
  article1477045370,
  article1476738850,
  article1475436850,
  article1476538850,
  article1475426750,
  article1474905680,
  article1474380939,
  article1473861890,
  article1478245913,
  article1476250476
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