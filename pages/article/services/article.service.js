import * as ngCore from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';

import { ngxUtils } from 'ngx-bootstrap/cores';

import { ARTICLES } from '../../../_database';

function _articleService(){
  this.constructor = [
    DomSanitizationService,

    function articleService(sanitizer){
      this.sanitizer = sanitizer;
    }
  ];

  this.getArticle = function(id){
    if(!id) { throw 'id is required for article'; }

    if(!ARTICLES[id]) { throw 'Not found articleId: ' + id; }

    var _article = ngxUtils.shallowCopy({}, ARTICLES[id]);
    _article.content = this.sanitizer.bypassSecurityTrustHtml(_article.content);
    
    return _article;
  };
}

export var articleService = ngCore.Class(new _articleService());