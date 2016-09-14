import * as ngCore from '@angular/core';

import { ngxUtils } from 'ngx-bootstrap/cores';

import { ARTICLE_STORE } from '../../../_database';

function _homeService(){
  var _posts;

  this.constructor = function homeService(){};

  this.getPosts = function(){
    if(!_posts) {
      var _post;
      _posts = [];

      ngxUtils.forEach(ARTICLE_STORE.LIST, function(article){
        _post = ngxUtils.shallowCopy({}, article);

        _posts.push(_post);
      }, this);
    }

    return _posts;
  };
}

export var homeService = ngCore.Class(new _homeService());