import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';

import { Class } from '@angular/core';

import { Store } from '@ngrx/store';

import { xblogArticleStore } from 'xblog-store';


export var xblogHomeService = Class({
  constructor: [
    Store,

    function xblogHomeService(store){
      this.store = store;
    }
  ],

  getPosts$: function(pageNumber, pageSize){
    return this.store.let(xblogArticleStore.getList)
    .map(function(articles){
      var _totalItems = articles.length;
      var _totalPages = _totalItems % pageSize === 0 ? _totalItems / pageSize : Math.floor(_totalItems / pageSize) + 1;
      var _pageNumber = pageNumber <= _totalPages ? pageNumber : _totalPages;
      var _pageSize = pageSize <= _totalItems ? pageSize : _totalItems;

      return articles
      .slice((_pageNumber - 1) * pageSize, pageNumber * pageSize)
      .map(function(article){
        return Object.assign({}, article);
      }); 
    });
  }
});