import * as ngCore from '@angular/core';

import { ARTICLE_STORE } from '../../../_database';

export var articleService = ngCore.Class({
  constructor: function(){},

  getArticle: function(id){
    if(!id) { throw 'id is required for article'; }

    if(!ARTICLE_STORE[id]) { throw 'Not found articleId: ' + id; }

    return Object.assign({}, ARTICLE_STORE[id]);
  }
});