import { Class } from '@angular/core';

import { xblogArticleStoreService } from 'xblog-store';

export var xblogArticleService = Class({
  constructor: [
    xblogArticleStoreService,

    function(articleStoreService){
      this.articleStoreService = articleStoreService;
    }
  ],

  getArticle: function(id){
    if(!id) { throw 'id is required for article'; }

    var _article = this.articleStoreService.getArticle(id);

    if(!_article) { throw 'Not found articleId: ' + id; }

    return _article;
  }
});