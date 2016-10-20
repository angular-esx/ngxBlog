import { Class } from '@angular/core';

import { ARTICLE_STORE } from '../cms/articles';


export var xblogArticleStoreService = Class({
  constructor: function (){},

  getArticle: function(id) {
    return ARTICLE_STORE[id] ? Object.assign({}, ARTICLE_STORE[id]) : null;
  },

  getArticles: function(pageNumber, pageSize) {
    var _totalItems = ARTICLE_STORE.LIST.length;
    var _totalPages = _totalItems % pageSize === 0 ? _totalItems / pageSize : Math.floor(_totalItems / pageSize) + 1;
    var _pageNumber = pageNumber <= _totalPages ? pageNumber : _totalPages;
    var _pageSize = pageSize <= _totalItems ? pageSize : _totalItems;

    return ARTICLE_STORE.LIST
    .slice((_pageNumber - 1) * pageSize, pageNumber * pageSize)
    .map(function(article){
      return Object.assign({}, article);
    }); 
  }
});