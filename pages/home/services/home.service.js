import * as ngCore from '@angular/core';

import { ARTICLE_STORE } from '../../../_database';

var _POSTS;

export var homeService = ngCore.Class({
  constructor: function(){},

  getPosts: function(){
    if(!_POSTS) {
      var _post;
      _POSTS = [];

      ARTICLE_STORE.LIST.forEach(function(article){
        _post = Object.assign({}, article);

        _POSTS.push(_post);
      });
    }

    return _POSTS;
  }
});