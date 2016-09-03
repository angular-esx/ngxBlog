import * as ngCore from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';

import { ngxUtils } from 'ngx-bootstrap/cores';

import { ARTICLES } from '../../../_database';

function _homeService(){
  var _posts;

  this.constructor = [
    DomSanitizationService,

    function homeService(sanitizer){
      this.sanitizer = sanitizer;
    }
  ];

  this.getPosts = function(){
    if(!_posts) {
      var _post;
      _posts = [];

      ngxUtils.forEach(ARTICLES, function(article){
        _post = ngxUtils.shallowCopy({}, article);
        _post.content = this.sanitizer.bypassSecurityTrustHtml(_post.content);

        _posts.push(_post);
      }, this);
    }

    return _posts;
  };
}

export var homeService = ngCore.Class(new _homeService());