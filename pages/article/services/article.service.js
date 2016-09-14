import * as ngCore from '@angular/core';

import { ngxUtils } from 'ngx-bootstrap/cores';

import { ARTICLE_STORE } from '../../../_database';

function _articleService(){
  this.constructor = function articleService(){};

  this.getArticle = function(id){
    if(!id) { throw 'id is required for article'; }

    if(!ARTICLE_STORE[id]) { throw 'Not found articleId: ' + id; }

    var _article = ngxUtils.shallowCopy({}, ARTICLE_STORE[id]);
    return _article;
  };
}

export var articleService = ngCore.Class(new _articleService());