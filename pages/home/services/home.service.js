import { Class } from '@angular/core';

import { xblogArticleStoreService } from 'xblog-store';


export var xblogHomeService = Class({
  constructor: [
    xblogArticleStoreService,

    function xblogHomeService(articleStoreService){
      this.articleStoreService = articleStoreService;
    }
  ],

  getPosts: function(pageNumber, pageSize){
    return this.articleStoreService.getArticles(pageNumber, pageSize);
  }
});