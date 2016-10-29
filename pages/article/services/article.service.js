import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';

import { Class } from '@angular/core';

import { Store } from '@ngrx/store';

import { xblogArticleStore } from 'xblog-store';


export var xblogArticleService = Class({
  constructor: [
    Store,

    function xblogArticleService(store){
      this.store = store;
    }
  ],

  getArticle$: function(id){
    return this.store.let(xblogArticleStore.getMap)
    .map(function(map){
      if(!id) { throw 'id is required for article'; }

      var _article = map[id];

      if(!_article) { throw 'Not found articleId: ' + id; }

      return _article;
    });
  }
});