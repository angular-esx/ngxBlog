import { Class } from '@angular/core';

import { ARTICLE_STORE } from '../../../cms/articles';

var _POSTS;

export var xblogHomeService = Class({
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